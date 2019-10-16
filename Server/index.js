const express = require('express');
const app = express();
const port = 80;

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/test1', (req, res) => res.send('Hello World1!'));
app.get('/test2/plzwrk', (req, res) => res.send('Hello World2!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));