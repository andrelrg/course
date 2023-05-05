const express = require('express');
const fs = require('fs');
const app = express();

app.get('/', (req, res) => {
  fs.readFile('index.html', 'utf8', (err, html) => {
    if (err) {
      res.status(500).send('Error reading file');
    } else {
      res.send(html);
    }
  });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});