import requests
from bs4 import BeautifulSoup
import json
import os

numberOfPages = 2
categories = ['vaccines','research']

f = open("article.json", "w")
f.write("[\n")
f.close()

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

            json_data = {"Title":[],"Article":[]}
            json_data["Title"].append(title.text)
            # json_data["Date_of_Publication"].append(title.text)

            for p in para:
                json_data["Article"].append(p.text)

            f = open("article.json", "a")
            f.write(json.dumps(json_data,indent=4))
            f.write(",\n")
            f.close()

        remove_chars = len(os.linesep)

f = open("article.json", "a")
f.truncate(f.tell() - remove_chars * 2)
f.write("\n]")
f.close()

