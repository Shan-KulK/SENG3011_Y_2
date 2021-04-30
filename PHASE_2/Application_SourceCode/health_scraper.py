import requests
from bs4 import BeautifulSoup
import json
import boto3
from boto3.dynamodb.conditions import Key, Attr
import os
import uuid

countries = ['India','Japan','Morocco','Italy','France','Kenya']#,'india','peru','china','russia','south-africa','brazil','new-zealand','italy','germany']

f = open("health.json", "w")
f.write("[\n")
f.close()

for place in countries:
    URL = 'https://www.smartraveller.gov.au/destinations/' + place
    page = requests.get(URL)

    mainSoup = BeautifulSoup(page.content, 'html.parser')
    healthSummary = mainSoup.find("div", {"class": "health paragraph paragraph--type--overview paragraph--view-mode--default"})
    healthSummaryPoints = healthSummary.find("ul").text.encode('ascii', 'ignore').decode("utf-8")

    overall = mainSoup.find("div", {"class": "views-field views-field-field-overall-advice-level"})
    level = overall.find("div").text.encode('ascii', 'ignore').decode("utf-8").replace("Overall: ",'')

    latest = mainSoup.find("div", {"id": "block-views-block-sidebars-last-updated"})
    latestDiv = latest.find("div", {"class":"views-field views-field-field-last-update"})
    latestUpdate = latestDiv.find("span", {"class":"right"}).text.encode('ascii', 'ignore').decode("utf-8")

    content = ""
    healthArticle = mainSoup.find_all("div",{"class": "clearfix text-formatted field field--name-field-body field--type-text-long field--label-hidden field__item"})
    for h in healthArticle:
        sib = h.find_previous_sibling('div')
        try:
            s = sib.find('h4').text
            if(s == "Health risks"):
                content = h.text.encode('ascii', 'ignore').decode("utf-8")
                break
        except:
            pass

    json_data = {}
    json_data["country"] = place
    json_data["status"] = level
    json_data["latest"] = latestUpdate
    json_data["summary"] = healthSummaryPoints
    json_data["info"] = content
    json_data["travel_advice_id"] = str(uuid.uuid4())
    json_data["article_preview"] = json_data["main_text"][:100] + "..."
    dynamodb = boto3.resource('dynamodb', region_name='ap-southeast-2', aws_secret_access_key='Rxso+Z2ILCL+DWBht3SIkYTJgzfTlnmHGDqKY7yV', aws_access_key_id='AKIAVZY2NVATXQRVYVEI')
    
    table = dynamodb.Table('travel_advice')
    resp = table.put_item(Item=json_data)

    f = open("health.json", "a")
    f.write(json.dumps(json_data,indent=4))
    if countries.index(place) == len(countries)-1:
        f.write("\n")
    else:
        f.write(",\n")
    f.close()

f = open("health.json", "a")
f.write("]")
f.close()
