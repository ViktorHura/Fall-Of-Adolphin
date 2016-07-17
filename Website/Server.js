const express = require('express');

const php = require('php');
// Constants
const PORT = 8080;

// App
const app = express();
app.get('/', function (req, res) {
  res.render('index.php',
  { title : 'Home' }
  )
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);