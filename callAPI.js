const request = require('request-promise');

module.exports = async function callAPI({
    appName, replyURLs, owners, apiURI
}) {
    const requestbody = JSON.stringify({
        applicationName: appName,
        replyURLs: replyURLs,
        owners: owners
    });

    try {
        const response = await request.post(apiURI, { body: requestbody });
        // console.log("svar: " + response)
        return response;
    } catch (e) {
        //console.log(e)
    }
};
