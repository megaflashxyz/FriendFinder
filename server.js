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


app.use(express.static('./app/public'));


app.use(require('./app/routing/apiRoutes.js').router);

app.use(require('./app/routing/htmlRoutes.js'));


app.listen((process.env.PORT || PORT), function() { 
	console.log('App is listening on port ' + PORT);
});
