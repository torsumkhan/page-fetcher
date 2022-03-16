const fs = require('fs')
const request = require('request');

let args = process.argv;
args = args.slice(2);

function fetch (url) {
    const newREq = request(url, (error, response,body) => {
        const content = body;
        fs.writeFile('./index.html', content, err => {
            if (err) {
                console.error(err)
                return 
            }
        console.log('Downloaded and saved 3261 bytes to ./index.html')
        })
    })
};

console.log(fetch(args[0]))