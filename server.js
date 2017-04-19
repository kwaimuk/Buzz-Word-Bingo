/* jshint esversion: 6 */
const express = require('express');
const bodyParser = require('body-parser');
const buzzwordRoutes = require('./routes/buzzword');
const app = express();
const PORT = 4040;

app.use(express.static('public'));

//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:false}));

//attach movie router to epxress
app.use('/buzzword',buzzwordRoutes);


app.get('/', function (req, res) {
  res.send(`public/index.html`);
});

app.get('/reset', function (req, res) {
  res.send(`DELETED`);
})

app.get("*",(req,res) => {
  res.send('404');
});

const server = app.listen(PORT, function () {
  const host = server.address().address;
  const port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});