
const express = require('express');
const app = express();
const path = require('path');
const sqlite3 = require('sqlite3').verbose();


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

// Search GET
app.get('/search', (req, res) => {
  const results = resultsMock();
  const searchTerm = req.query.q.toLowerCase();

  let sites = executeQuery("select * from clothes where brand = '" + searchTerm + "'");

  res.render('search', { sites });
});


// Project Start 
app.listen(3000, () => {
  console.log('Server initialized on port 3000');
});


function executeQuery(query) {
  const dbPath = './database/database.db';
  const db = new sqlite3.Database(dbPath);

  return new Promise((resolve, reject) => {
    db.all(query, (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
}

function resultsMock(){
    return [
        {
          url: 'https://www.motos.com',
          title: 'As melhores motos esportivas de 2023',
          description: 'Descubra as últimas novidades e os modelos mais rápidos e potentes do mercado de motos esportivas.'
        },
        {
          url: 'https://www.carros.com',
          title: 'Os carros mais econômicos de 2023',
          description: 'Confira os modelos de carros que oferecem o melhor consumo de combustível e economize na hora de abastecer.'
        },
        {
          url: 'https://www.escolas.com',
          title: 'As melhores escolas particulares da sua região',
          description: 'Encontre as instituições de ensino de qualidade próximas a você, com currículo diferenciado e alto desempenho acadêmico.'
        },
        {
          url: 'https://www.viagens.com',
          title: 'Os melhores destinos para viajar em 2023',
          description: 'Descubra os lugares mais incríveis para visitar neste ano, desde praias paradisíacas até cidades históricas.'
        },
        {
          url: 'https://www.tecnologia.com',
          title: 'As últimas tendências em dispositivos eletrônicos',
          description: 'Fique por dentro das inovações tecnológicas, como smartphones, smartwatches, tablets e muito mais.'
        },
        {
          url: 'https://www.saude.com',
          title: 'Dicas para manter uma vida saudável',
          description: 'Encontre orientações sobre alimentação balanceada, exercícios físicos, cuidados com a mente e dicas para ter uma vida saudável.'
        },
        {
          url: 'https://www.esportes.com',
          title: 'As últimas notícias esportivas',
          description: 'Acompanhe as novidades do mundo esportivo, desde futebol e basquete até esportes radicais e eventos esportivos internacionais.'
        },
        {
          url: 'https://www.receitas.com',
          title: 'Receitas fáceis e deliciosas para qualquer ocasião',
          description: 'Descubra pratos incríveis, desde receitas rápidas para o dia a dia até sobremesas irresistíveis para impressionar seus convidados.'
        },
        {
          url: 'https://www.filmes.com',
          title: 'Os melhores filmes de todos os tempos',
          description: 'Confira as obras cinematográficas que marcaram época e são consideradas verdadeiros clássicos do cinema.'
        },
        {
          url: 'https://www.musica.com',
          title: 'As músicas mais populares do momento',
          description: 'Descubra as faixas musicais que estão bombando nas paradas de sucesso e encontre novos artistas para ouvir.'
        }
      ];
}