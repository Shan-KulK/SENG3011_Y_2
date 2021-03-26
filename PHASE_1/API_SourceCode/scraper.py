import uuid
import requests
from datetime import datetime
from sys import getsizeof
from bs4 import BeautifulSoup
import boto3
import json
import os
from dateutil.parser import parse
from datetime import datetime, timedelta


numberOfPages = 1
categories = ['vaccines']

f = open("article.json", "w")
f.write("[\n")
f.close()

key_id = 'AKIAVZY2NVATXQRVYVEI'
secret_key = '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'

for cat in categories:
    for count in range(1,numberOfPages+1):
        URL = 'http://outbreaknewstoday.com/category/' + cat + '/page/' + str(count)
        page = requests.get(URL)

        mainSoup = BeautifulSoup(page.content, 'html.parser')
        catArticles = mainSoup.find("div", {"class": "post_area"})
        articleSides = catArticles.find_all("div", {"class": "rightconside"})
        links = []
        for link in articleSides:
            links.append(link.find("a")['href'])


        for l in links:
            URL = l
            page = requests.get(URL)

            soup = BeautifulSoup(page.content, 'html.parser')
            article = soup.find("div", {"class": "postsingle"})
            title = article.find('h1')
            meta_data = article.find("div", {"class": "single_meta"})
            date_object = meta_data.find("div", {"class": "datesingle"})
            date_value = date_object.find("div", {"class":"datsingle"})
            para = article.find_all('p')
            print(date_value)

            meta_data = article.find("div", {"class": "single_meta"})
            date_object = meta_data.find("div", {"class": "datesingle"})
            date_value = date_object.find("div", {"class":"datsingle"})
            para = article.find_all('p')
            for span_tag in date_value.findAll('span'):
                span_tag.replace_with('')


            reports = {"diseases":[],"syndromes":[], "locations":[]}
            json_data = {"main_text": [],"reports":[reports]}
            json_data["headline"] = title.text
            json_data["url"] = URL
            date_value_text = date_value.text
            d = datetime.strptime(date_value_text, '%B %d, %Y')
            date_string = str(d.strftime('%Y-%m-%d %X'))
            json_data["date_of_publication"] = date_string


            for p in para:
                json_data["main_text"].append(p.text)

            text = ''.join(json_data["main_text"])
            print(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
            print(text)
            print(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
            json_data["main_text"] = text

            comprehend = boto3.client(service_name='comprehend', region_name='ap-southeast-2', aws_access_key_id=key_id, aws_secret_access_key=secret_key)
            entity_report = {} # Dictionary representation of json returned from Amazon Comprehend API
            text_truncated = text[:4960]
            entity_report = comprehend.detect_entities(Text=text_truncated, LanguageCode='en')
            # print(">>>>>>>>>>Entity Report for article>>>>>>>>>>>>>>>>>>>>>>>>")
            # print(entity_report)
            # print(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
            with open('disease_list.json') as disease_json_file:
                ddata = json.load(disease_json_file)
                for d in ddata:
                    if d['name'].lower() in text.lower():
                        json_data["reports"][0]["diseases"].append(d['name'])

            with open('syndrome_list.json') as syndrome_json_file:
                sdata = json.load(syndrome_json_file)
                for s in sdata:
                    if s['name'].lower() in text.lower():
                        json_data["reports"][0]["syndromes"].append(s['name'])

            sorted_entities = sorted(entity_report['Entities'], key=lambda k: k['Score'])

            print(json.dumps(sorted_entities))
            for values in sorted_entities:
                if values['Type'] == 'LOCATION':
                    json_data["reports"][0]["locations"].append(values['Text'])
                # if values['Type'] == 'DATE':
                    # json_data["reports"][0]["event_date"] = values['Text']

            json_data["reports"][0]["event_date"] = date_string
            for k,v in json_data.items():
                print(">>articles<<<<<<")
                print(str(k)+"----->"+str(v))

            print(">>>>>>>>>>>>>>>>>>>>>>>>")
            print(json.dumps(json_data))
            print(">>>>>>>>>>>>>>>>>>>>>>>>")
            uniq = str(uuid.uuid4())
            uniq2 = str(uuid.uuid4())
            json_data['article_id'] = uniq
            json_data['reports'][0]['report_id'] = uniq2 
            json_data['reports'][0]['article_id'] = uniq
            dynamodb = boto3.resource('dynamodb', region_name='ap-southeast-2', aws_secret_access_key=secret_key, aws_access_key_id=key_id)
            
            table = dynamodb.Table('Articles')
            resp = table.put_item(Item=json_data)
            print(resp)

            table2 = dynamodb.Table('Reports')
            resp2 = table2.put_item(Item=json_data['reports'][0])
            print(">>>>>>>>>>>>>>>>>>>>>>>>")
            print(json_data['reports'][0])
            print(">>>>>>>>>>>>>>>>>>>>>>>>")
            print(">>>>>>>>>>>>>>>>>>>>>>>>")
            print(resp2)
            print(">>>>>>>>>>>>>>>>>>>>>>>>")
            print(">>>>>>>>>>>>>>>>>>>>>>>>")
            print(">>>>>>>>>>>>>>>>>>>>>>>>")

            f = open("article.json", "a")
            f.write(json.dumps(json_data,indent=4))
            f.write(",\n")
            f.close()

        remove_chars = len(os.linesep)

f = open("article.json", "a")
f.truncate(f.tell() - remove_chars * 2)
f.write("\n]")
f.close()
