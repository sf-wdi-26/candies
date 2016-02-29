var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var router = express.Router();
var bodyParser = require('bodyParser');

app.set('views', './views');
app.set('view engine', 'ejs');

// Middleware
app.use(function(req, res, next) {
    console.log('%s request to %s from %s', req.method, req.path, req.ip);
    next();
});

app.use (bodyParser.urlencoded({ extended: false})); 

router.get('/', function(req, res){
    res.render('index', { header: 'index!'});
});

router.get('contact', function(req, res){
    res.render('contact', { header: 'contact!'});
});

router.get('/about', function(req, res){
    res.render('about', {header: 'about!'});
});

app.use('/', router);

app.listen(port);
console.log('Server started on ' + port);