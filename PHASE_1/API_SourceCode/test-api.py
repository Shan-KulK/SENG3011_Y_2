import os



cmd = """
curl -XPOST -H "Content-Type:application/json" -H "x-api-key:da2-ylteppvzqfduzksj4oikj4zthq" -d '{ "query": "query {
  getArticles(key_terms: "zika", location: "sweden", period_of_interest: "2018") {
    date_of_publication
    headline
    main_text
    reports {
      diseases
      event_date
      locations
      syndromes
      article_id
      report_id
    }
    url
    article_id
  }
}" }' https://kbalsuc6xva7bptavcpi4zqkai.appsync-api.ap-southeast-2.amazonaws.com/graphql
"""


print("Starting request to Appsync endpoint")
os.system(cmd)
print("Finsihed request to Appsync endpoint")
