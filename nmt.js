import serviceid from "./serviceId.js";
import axios from "axios";
import 'dotenv/config'
import { env } from 'node:process'

async function nmt(sourceLang, targetLang, sourceText) {
    const url = 'https://dhruva-api.bhashini.gov.in/services/inference/pipeline'
    const userId = env.userId;
    const ulcaApiKey = env.userId;
    const AuthorizationToken = env.AuthorizationToken;
    console.log('calling nmt translation package')

    const payload = {
        "pipelineTasks": [
            {
                "taskType": "translation",
                "config": {
                    "language": {
                        "sourceLanguage": sourceLang,
                        "targetLanguage": targetLang
                    },
                    "serviceId": serviceid.nmt
                }
            }
        ],
        "inputData": {
            "input": [
                {
                    "source": sourceText
                }
            ]
        }
    }

    return await axios.post(url, payload, {
        headers: {
            Authorization: AuthorizationToken,
            'Content-Type': 'application/json',
            'ulcaApiKey': ulcaApiKey,
            'userId': userId,
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Origin': 'http://localhost:5173/',

        }
    }).then(function (res) {
        console.log('Response:', res.data.pipelineResponse[0].output[0].target);
        return res.data.pipelineResponse[0].output[0].target
    })
        .catch(function (error) {
            console.error('Error:', error);
        });
}
nmt("en", "hi", "hello i am going.")

export default nmt
// console.log(translated) एब्स्ट्रैक्शन का अर्थ है कुछ विवरणों को छिपाना जो उपयोगकर्ता के लिए मायने नहीं रखते हैं और केवल आवश्यक विशेषताओं या कार्यों को दिखाते हैं।