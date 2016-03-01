var express = require('express'),
    app = express(),
    router = express.Router(),
    bodyParser = require('body-parser'),
    ejs = require('ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false})); 

app.use(require('./controllers'));
app.use(require('./controllers/candies'));

// set static views, as well as error pages
app.set('views', './views');
app.set('view engine', 'ejs');

app.listen(3000, function(){
    console.log('Server started on port 3000');
});