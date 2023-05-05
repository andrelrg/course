# Install NVM
```
ref: https://nodejs.dev/en/download/package-manager/#nvm
```
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash

nvm install 8

nvm use 8
```

# Starting a Node application

$ npm init
```
package name: (g1)
version: (1.0.0)
description: A simple example webpage
entry point: (index.js)
test command: test
git repository:
keywords:
author:
license: (ISC)
```
$ npm install express

## Create an entry point

Create a file called `index.js` and enter the code bellow:

```js
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
```

## Create a 