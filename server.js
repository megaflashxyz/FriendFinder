const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
let friends = require('./app/data/friends.js');
const app = express();
const PORT = 3000;



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
  type: "application/vnd.api+json"
}));

app.use(express.static('app/public'));

app.use(require('./app/routing/apiRoutes.js'));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, 'app/public/home.html'));
});

app.get('/survey', function(req,res){
	res.sendFile(path.join(__dirname, 'app/public/survey.html'));
});

app.listen(PORT, function() { 
	console.log('App is listening on port ' + PORT);
});
