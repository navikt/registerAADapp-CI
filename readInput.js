const yaml = require('js-yaml');
const fs = require('fs');

module.exports = function readInput() {
    const input = yaml.safeLoad(fs.readFileSync('./applications.yaml', 'utf8'));
    console.log(input);
    return input;
};
