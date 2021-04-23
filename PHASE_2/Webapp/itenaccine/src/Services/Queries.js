// import gql from 'graphql-tag';

// export const getNewsStreamQuery = gql`
// query 
// {
//     getWhoArticles(countries: ${locations}) {
//         statusMessage
//         statusCode
//         body {
//             article_preview
//             country
//             date_of_publication
//             main_text
//             thumbnail
//             title
//         }
//     }
// }
// `
export var myHeaders = new Headers();
myHeaders.append("x-api-key", "da2-3efkkj2ok5hefpshpp5on4pz4m");
myHeaders.append("X-Amz-Content-Sha256", "8315b0fed460113dfc1738d52e331284e0ff498fb29985c316d0e9df7ed14a19");
myHeaders.append("X-Amz-Date", "20210423T024730Z");
myHeaders.append("Authorization", "AWS4-HMAC-SHA256 Credential=AKIAVZY2NVATXQRVYVEI/20210423/us-east-1/execute-api/aws4_request, SignedHeaders=host;x-amz-content-sha256;x-amz-date;x-api-key, Signature=6ff7ea1539097067a5d738ab32f4f58be031ba5ad334ab6225db59b9cddb3c14");
myHeaders.append("Content-Type", "application/json");

export const graphql = locations => {
    return JSON.stringify({
        query: `query {\n  getWhoArticles(countries: ${locations}) {\n    statusMessage\n    statusCode\n    body {\n      article_preview\n      country\n      date_of_publication\n      main_text\n      thumbnail\n      title\n    }\n  }\n}`,
        variables: {}
    })
}

export const servicePath = "https://kbalsuc6xva7bptavcpi4zqkai.appsync-api.ap-southeast-2.amazonaws.com/graphql"
export var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: graphql(`[\"India\", \"Japan\"]`),
    redirect: 'follow'
    
};

export const getNewsStreamQuery = () => {
    fetch(servicePath, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}