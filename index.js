const fs = require('fs');

const key = fs.readFileSync(process.env.KEY);
const cert = fs.readFileSync(process.env.CERT);

const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
  res.status(200).send('Hello world!');
});

app.get('/json', (req, res, next) => {
  res.status(200).json({
    success: true,
    statusCode: 200
  });
});

const https = require('https');
const server = https.createServer({ key, cert }, app);

const port = process.env.PORT || 8080;
server.listen(port, () => {
  console.log(`Server is listening on https://localhost:${port}`);
});