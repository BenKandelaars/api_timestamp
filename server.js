const express = require('express');
const bodyParser = require('body-parser');


const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.end('The api is located on /api. Please direct your requests there.')
})

app.get('/api', (req, res) => {
  res.end('Yep the API response will go here & here');
})

app.listen(port)