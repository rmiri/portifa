const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const path = require('path');

const app = express();
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(pino);

// app.get('/api/greeting', (req, res) => {
//   const name = req.query.name || 'World';
//   res.setHeader('Content-Type', 'application/json');
//   res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
// });

app.get('/', (request, response){
  response.sendFile(path.join(__dirname, '../public/index.html'))
});

// Will listen on port 3001 instead of 3000
app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);