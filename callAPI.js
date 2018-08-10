const request = require('request-promise');
const apiURI = process.env.apiURI;


module.exports = async function callAPI({
    appName, replyURLs, owners
}) {

    const requestbody = JSON.stringify({
        applicationName: appName,
        replyURLs: replyURLs,
        owners: owners
    })

    
    console.log('URL: ' + process.env.apiURI)
    //console.log("body: " + appName + replyURLs + owners)
    console.log("requestbody: " + requestbody)

    try {
        const response = await request.post(apiURI, { body: requestbody });
        console.log("svar: " + response)
        return response;

    } catch (e) {
        console.log(e)
    }


}