
const express = require('express');
const app = express();
const path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public'), { 
    setHeaders: (res, filePath) => {
      if (filePath.endsWith('.css')) {
        res.setHeader('Content-Type', 'text/css');
      }
    }
}));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/search', (req, res) => {
  const sites = [
    { url: 'https://www.example.com', title: 'Exemplo', description: 'Descrição do site de exemplo' },
    { url: 'https://www.sample.com', title: 'Amostra', description: 'Descrição do site de amostra' },
  ];

  res.render('search', { sites });
});

app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});