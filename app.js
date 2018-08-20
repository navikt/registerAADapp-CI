
const callAPI = require('./callAPI');
const readInput = require('./readInput')

// leser preprod konfig og utfører for preprod
async function doPreprod() {
    const file = "./applicationsQ.yaml"
    const input = readInput({ file });
    // console.log(input)
    for (var i = 0, len = input.Applications.length; i < len; i++) {
        
        const appName = input.Applications[i].name
        const replyURLs = input.Applications[i].replyURLs
        const owners = input.Applications[i].owners
    
        const apiURI = process.env.apiURIQ;
        const result = await callAPI({ apiURI, appName, replyURLs, owners });
        console.log(result);
    }
}

// leser prod konfig og utfører for prod
async function doProd() {
    const file = "./applicationsP.yaml"
    const input = readInput({ file });
    // console.log(input)
    for (var i = 0, len = input.Applications.length; i < len; i++) {
        
        const appName = input.Applications[i].name
        const replyURLs = input.Applications[i].replyURLs
        const owners = input.Applications[i].owners
    
        const apiURI = process.env.apiURIP;
        const result = await callAPI({ apiURI, appName, replyURLs, owners });
        console.log(result);
    }
}


doPreprod();
doProd();
