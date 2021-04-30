import requests
from bs4 import BeautifulSoup
import json
import boto3
from boto3.dynamodb.conditions import Key, Attr
import os
import uuid
#change number of pages to get more results, 10 results per page
numberOfPages = 1


for count in range(1,numberOfPages+1):
    URL = 'https://www.who.int/news-room/headlines/' + str(count)
    page = requests.get(URL)

    mainSoup = BeautifulSoup(page.content, 'html.parser')
    catArticles = mainSoup.find("div", {"class": "list-view vertical-list vertical-list--image"})
    articleSides = catArticles.find_all("div", {"class": "list-view--item vertical-list-item"})
    links = []
    thumbs = []
    for link in articleSides:
        links.append(link.find("a")['href'])

    for thumb in articleSides:
        thumbs.append(thumb.find("div",{"class:","background-image background-image--small"})["data-image"])
    for l in links:
        URL = 'https://www.who.int' + l
        page = requests.get(URL)

        soup = BeautifulSoup(page.content, 'html.parser')
        article = soup.find("div", {"id": "PageContent_T0643CD2A006_Col01"})
        title = article.find('h1')
        publishedDate = article.find("span", {"class": "timestamp"})
        para = article.find('article')

        json_data = {}
        json_data["title"] = title.text.encode('ascii', 'ignore').decode("utf-8")
        json_data["main_text"] = para.text.encode('ascii', 'ignore').decode("utf-8")
        json_data["date_of_publication"] = publishedDate.text.encode('ascii', 'ignore').decode("utf-8")
        json_data["thumbnail"] = thumbs[links.index(l)]
        json_data["global_id"] = str(uuid.uuid4())  
        json_data["country"] = "global"
        json_data["article_preview"] = json_data["main_text"][:100] + "..."
        print(json_data)
        dynamodb = boto3.resource('dynamodb', region_name='ap-southeast-2', aws_secret_access_key='Rxso+Z2ILCL+DWBht3SIkYTJgzfTlnmHGDqKY7yV', aws_access_key_id='AKIAVZY2NVATXQRVYVEI')
        table = dynamodb.Table('global_articles')
        resp = table.put_item(Item=json_data)
