import requests
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


            reports = {"Diseases":[],"Syndromes":[], "Locations":[],"Dates":[]}
            json_data = {"Title":[],"Article":[],"PublishedDate":[],"Reports":reports}
            json_data["Title"].append(title.text)
            json_data["PublishedDate"].append(date_value.text)

            for p in para:
                json_data["Article"].append(p.text)

            text = ''.join(json_data["Article"])
            print(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
            print(text)
            print(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
            json_data["Article"] = text

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
                        json_data["Reports"]["Diseases"].append(d['name'])

            with open('syndrome_list.json') as syndrome_json_file:
                sdata = json.load(syndrome_json_file)
                for s in sdata:
                    if s['name'].lower() in text.lower():
                        json_data["Reports"]["Syndromes"].append(s['name'])

            for values in entity_report['Entities']:
                if values['Type'] == 'LOCATION':
                    json_data["Reports"]["Locations"].append(values['Text'])
                if values['Type'] == 'DATE':
                    json_data["Reports"]["Dates"].append(values['Text'])
            

            f = open("article.json", "a")
            f.write(json.dumps(json_data,indent=4))
            f.write(",\n")
            f.close()

        remove_chars = len(os.linesep)

f = open("article.json", "a")
f.truncate(f.tell() - remove_chars * 2)
f.write("\n]")
f.close()
