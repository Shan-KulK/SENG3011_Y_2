import requests
from bs4 import BeautifulSoup
import json
import os
import country_converter as coco

country_names = ['India', 'Australia','Japan']
standard_names = coco.convert(names=country_names, to='ISO3')

f = open("country_who_article.json", "w")
f.write("[\n")
f.close()

for country in standard_names:
    URL = 'https://www.who.int/countries/' + country
    page = requests.get(URL)

    mainSoup = BeautifulSoup(page.content, 'html.parser')
    catArticles = mainSoup.find("div", {"id": "PageContent_C431_Col00"}).find("div", {"class": "list-view horizontal-list matching-height"})
    articleSides = catArticles.find_all("div", {"class": "list-view--item horizontal-list-item matching-height--item"})
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

        json_data = {"Title":[],"Article":[],"PublishedDate":[],"Thumbnail":[],"Reports":{"Diseases":[],"Syndromes":[]}}
        json_data["Title"].append(title.text.encode('ascii', 'ignore').decode("utf-8"))
        json_data["Article"].append(para.text.encode('ascii', 'ignore').decode("utf-8"))
        json_data["PublishedDate"].append(publishedDate.text.encode('ascii', 'ignore').decode("utf-8"))
        json_data["Thumbnail"].append(thumbs[links.index(l)])

        with open('disease_list.json') as disease_json_file:
            ddata = json.load(disease_json_file)
            for d in ddata:
                if d['name'].lower() in para.text.lower():
                    json_data["Reports"]["Diseases"].append(d['name'])

        with open('syndrome_list.json') as syndrome_json_file:
            sdata = json.load(syndrome_json_file)
            for s in sdata:
                if s['name'].lower() in para.text.lower():
                    json_data["Reports"]["Syndromes"].append(s['name'])

        f = open("country_who_article.json", "a")
        f.write(json.dumps(json_data,indent=4))
        if links.index(l) == len(links)-1:
            f.write("\n")
        else:
            f.write(",\n")
        f.close()

f = open("country_who_article.json", "a")
f.write("\n]")
f.close()