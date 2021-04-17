import requests
from bs4 import BeautifulSoup
import json
import os

countries = ['egypt','india','peru','china','russia','south-africa','brazil','new-zealand','italy','germany']

f = open("health.json", "w")
f.write("[\n")
f.close()

for place in countries:
    URL = 'https://www.smartraveller.gov.au/destinations/' + place
    page = requests.get(URL)

    mainSoup = BeautifulSoup(page.content, 'html.parser')
    healthSummary = mainSoup.find("div", {"class": "health paragraph paragraph--type--overview paragraph--view-mode--default"})
    healthSummaryPoints = healthSummary.find("ul").text.encode('ascii', 'ignore').decode("utf-8")

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

    json_data = {"Country":[],"Summary":[],"Info":[]}
    json_data["Country"].append(place)
    json_data["Summary"].append(healthSummaryPoints)
    json_data["Info"].append(content)

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
