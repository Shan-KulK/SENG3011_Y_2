# getTravelAdvice Lambda code:
import json
import boto3
from boto3.dynamodb.conditions import Key, Attr


def lambda_handler(event, context):
    travel_advice = []
    dynamodb = boto3.resource('dynamodb', region_name='ap-southeast-2', aws_secret_access_key='Rxso+Z2ILCL+DWBht3SIkYTJgzfTlnmHGDqKY7yV', aws_access_key_id='AKIAVZY2NVATXQRVYVEI')
    table_reports = dynamodb.Table('travel_advice')
    for country in event['arguments']['countries']:
        temp = (table_reports.scan(FilterExpression=Attr("country").eq(country)))
        for article in temp['Items']:
            travel_advice.append(article)
            

    return {
        'statusCode': 200,
        'body': travel_advice,
        'statusMessage': "OK"
    }


# global_news Lambda code:
import json
import boto3
from boto3.dynamodb.conditions import Key, Attr


def lambda_handler(event, context):
    # TODO implement
    global_articles = []
    dynamodb = boto3.resource('dynamodb', region_name='ap-southeast-2', aws_secret_access_key='Rxso+Z2ILCL+DWBht3SIkYTJgzfTlnmHGDqKY7yV', aws_access_key_id='AKIAVZY2NVATXQRVYVEI')
    table_reports = dynamodb.Table('global_articles')
    temp = (table_reports.scan())
    for article in temp['Items']:
        del article["global_id"]
        global_articles.append(article)
            

    return {
        'statusCode': 200,
        'body': global_articles,
        'statusMessage': "OK"
    }


# who_news Lambda code:

import json
import boto3
from boto3.dynamodb.conditions import Key, Attr


def lambda_handler(event, context):
    # TODO implement
    who_articles = []
    dynamodb = boto3.resource('dynamodb', region_name='ap-southeast-2', aws_secret_access_key='Rxso+Z2ILCL+DWBht3SIkYTJgzfTlnmHGDqKY7yV', aws_access_key_id='AKIAVZY2NVATXQRVYVEI')
    table_reports = dynamodb.Table('who_articles')
    for country in event['arguments']['countries']:
        temp = (table_reports.scan(FilterExpression=Attr("country").eq(country)))
        for article in temp['Items']:
            del article["who_article_id"]
            who_articles.append(article)
            

    return {
        'statusCode': 200,
        'body': who_articles,
        'statusMessage': "OK"
    }
