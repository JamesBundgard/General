const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 80;

function getServerIP(res){
    let pathToIP = path.join(__dirname, '..', 'ServerIP.txt');
    fs.readFile(pathToIP, 'utf8', function(error, data) {
        if (error) {
            console.log('Error:- ' + error);
            throw error;
        }
        else {
            let result = "http://"+data.trim()+"/";;
            console.log(result);
            res.send(result);
        }
    })
}

app.get('/ping', (req, res) => res.send('Pong!'));
app.get('/api/url', (req, res) => getServerIP(res));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));