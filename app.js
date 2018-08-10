
const callAPI = require('./callAPI');
const readInput = require('./readInput')

const input = readInput();
console.log(input)

async function dostuff() {
    for (var i = 0, len = input.Applications.length; i < len; i++) {
        
        const appName = input.Applications[i].name
        const replyURLs = input.Applications[i].replyURLs
        const owners = input.Applications[i].owners
    
        const result = await callAPI({ appName, replyURLs, owners });
        console.log(result);


    }
}

dostuff();
