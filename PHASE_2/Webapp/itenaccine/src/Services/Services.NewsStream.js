import axios from 'axios';
import gql from 'graphql-tag';
import { graphql, compose} from 'react-apollo';


const servicePath = `https://kbalsuc6xva7bptavcpi4zqkai.appsync-api.ap-southeast-2.amazonaws.com/graphql`
const apiKey = 'da2-3efkkj2ok5hefpshpp5on4pz4m'

const headers = {
    'Content-Type': 'application/json',
    // 'x-api-key': apiKey
}

export const getNewsStream = (locations) => {
    return axios.post(servicePath, {
        query: `
                query getWhoArticles(countries: ${locations}) {
                    statusMessage
                    statusCode
                    body {
                        article_preview
                        country
                        date_of_publication
                        main_text
                        thumbnail
                        title
                    }
                }
                `
    }, headers)
    // return axios({
    //     url: servicePath,
    //     headers: { 'x-api-key': apiKey },
    //     method: 'post',
    //     data: {
    //         query: `
    //             query getWhoArticles(countries: ${locations}) {
    //                 statusMessage
    //                 statusCode
    //                 body {
    //                     article_preview
    //                     country
    //                     date_of_publication
    //                     main_text
    //                     thumbnail
    //                     title
    //           }
    //         }
    //         `
    //     }
    // }).then((result) => {
    //     console.log(result.data)
    // });
}