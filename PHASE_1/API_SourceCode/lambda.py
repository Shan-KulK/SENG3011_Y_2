import re
import json
import boto3
from boto3.dynamodb.conditions import Key, Attr
from dateutil.parser import parse
from datetime import datetime, timedelta
import uuid


def lambda_handler(event, context):
    dynamodb = boto3.resource('dynamodb', region_name='ap-southeast-2', aws_secret_access_key='Rxso+Z2ILCL+DWBht3SIkYTJgzfTlnmHGDqKY7yV', aws_access_key_id='AKIAVZY2NVATXQRVYVEI')
    table_reports = dynamodb.Table('Reports')
    response = table_reports.scan()
    data = response['Items']
    table = data
    table_articles = dynamodb.Table('Articles')
    response = table_articles.scan()
    articles = response['Items']
    s3 = boto3.client("s3", aws_access_key_id='AKIAVZY2NVATXQRVYVEI', aws_secret_access_key='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')
    uniq = str(uuid.uuid4())
    key = "API_output_file_" + uniq
    response = s3.put_object(
         Bucket='y-2',
         Key=key,
         Body='Sample Text',
         ACL='public-read'
    )    
    if "period_of_interest" not in event['arguments']:
        ret = {
            "statusCode": 400,
            "statusMessage": "Error: period_of_interest must be supplied as a parameter."
        }    
        return ret
    
    print(data)
    input_date_range = event['arguments']['period_of_interest']


    if not re.match(r"^(\d{4})-(\d\d|xx)-(\d\d|xx) (\d\d|xx):(\d\d|xx):(\d\d|xx) to (\d{4})-(\d\d|xx)-(\d\d|xx) (\d\d|xx):(\d\d|xx):(\d\d|xx)$", input_date_range):
        return {
            "statusCode": 400,
            "statusMessage": "Error: period_of_interest does not match desired format."
        }

    dates = input_date_range.split(" to ")
    (start_date, end_date) = dates
    print(end_date)

    start_date = parse_date(start_date)
    end_date = parse_date(end_date)


    if parse(start_date, fuzzy=False) > parse(end_date, fuzzy=False):
        print("bad dates")
        return {
            "statusCode": 400,
            "statusMessage": "Error: End date cannot precede start date."
        }


    print(start_date,end_date)


    correct_dates = []

    date_limiter = [ sub['event_date'] for sub in table ]
    for date in date_limiter:
        if parse(date, fuzzy=False) > parse(start_date, fuzzy=False) and  parse(date, fuzzy=False) < parse(end_date, fuzzy=False):
            correct_dates.append(date)
            print(date)

    if not correct_dates:
        return {
            "statusCode": 200,
            "statusMessage": "No dates matching period of interest."
        }
        
    filtered_table = []

    for date in correct_dates:
        temp = (table_reports.scan(FilterExpression=Attr("event_date").eq(date)))
        filtered_table.append(temp['Items'][0])

    print(filtered_table)
    

    if "key_terms" not in event['arguments'] and "location" not in event['arguments']:
      date_article_ids = [sub["article_id"] for sub in filtered_table]
      ret_articles = [l for l in articles if any(e in date_article_ids for e in l.values())]
      return {
          "statusCode": 200,
          "body": ret_articles,
          "statusMessage": "Query successful"
          
      }
    
    new_filtered_table = filtered_table
    
    if "key_terms" in event['arguments']:
      key_terms = event['arguments']['key_terms']
      key_terms_list = key_terms.split(",")
      report_diseases = [ (sub['diseases'],sub['article_id']) for sub in filtered_table ]
      report_syndromes = [ (sub['syndromes'],sub['article_id']) for sub in filtered_table ]
      list1 = report_diseases + report_syndromes
  
      key_term_limiter = [x for x in list1 if all(x)]
  
      print(key_term_limiter)
      print(date_limiter)
      print(key_terms_list)
      correct_key_terms = [l for l in key_term_limiter if any(e in key_terms_list for e in l[0])]
      print(correct_key_terms)
      filtered_article_ids = [x[1] for x in correct_key_terms]
      print(filtered_article_ids)
      new_filtered_table = [l for l in filtered_table if any(e in filtered_article_ids for e in l.values())]
      print(new_filtered_table)
  
      if not new_filtered_table:
          return {
              "statusCode": 200,
              "statusMessage": "No articles matching both period of interest and key_terms parameters"
          }


    result_table = new_filtered_table
    if "location" in event['arguments']:
      location = event['arguments']['location']
      result_table = [x for x in new_filtered_table if location in x["locations"]]
    
    print(result_table)
    
    if not result_table:
        return {
            "statusCode": 200,
            "statusMessage": "No articles matching the given query."
        }
    
    final_article_ids = [sub["article_id"] for sub in result_table]   


    print(">>>>>")
    print(">>>>>")

    new_filtered_table = [l for l in articles if any(e in final_article_ids for e in l.values())]
    print(new_filtered_table)

    return {
        "statusCode": 200,
        "body": new_filtered_table,
        "statusMessage": "Query successful"
    }



def parse_date(start_date):
    parsed_input_date_range = ""
    if "-xx-xx" in start_date:
        parsed_input_date_range = start_date.replace("-xx-xx","")
        start_date = parsed_input_date_range
    if "-xx" in start_date:
        parsed_input_date_range = start_date.replace("-xx","")
        start_date = parsed_input_date_range
    if "xx:xx:xx" in start_date:
        parsed_input_date_range = start_date.replace("xx:xx:xx","")
        start_date = parsed_input_date_range
    if ":xx:xx" in start_date:
        parsed_input_date_range = start_date.replace(":xx:xx","")
        start_date = parsed_input_date_range
    if ":xx" in start_date:
        parsed_input_date_range = start_date.replace(":xx","")
        start_date = parsed_input_date_range

    return start_date
