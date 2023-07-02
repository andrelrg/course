## Project configuration
```shell
$ npm init
$ npm install express
$ npm install ejs
```

## Step By Step
- Create index.js
```
const express = require('express');
const app = express();
const path = require('path');

// EJS configuration
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public'), { 
    setHeaders: (res, filePath) => {
      if (filePath.endsWith('.css')) {
        res.setHeader('Content-Type', 'text/css');
      }
    }
}));

// Index GET
app.get('/', (req, res) => {    
    res.render('index');
});

app.listen(3000, () => {
  console.log('Server initialized on port 3000');
});
```

- Create views direcory
- Put index.html in there renaming it to .ejs
- Create public directory
- styles.css in there
- Create images directory inside of public and put google logo in there
- Change in index.ejs
```
<link rel="stylesheet" type="text/css" href="/styles.css">
```
```
<img src="/images/google_logo.png" alt="Google Logo">
```
- Create form into index.ejs with action `search` and method `get`
- input must have a name
- button should be type `submit`
- Create search controller 