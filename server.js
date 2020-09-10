const express = require('express');
const path = require('path');

const app = express();

// by convention 8080 normally, but express convention is 3000
const port = 3000;

app.use(express.static(path.join(__dirname, './static')));

app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname, './static/index.html'));
});

app.get('/speakers', (request, response) => {
  response.sendFile(path.join(__dirname, './static/speakers.html'));
});

app.listen(port, () => {
  console.log(`Express server listening on port ${port}!`);
});
