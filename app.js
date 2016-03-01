var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    router = express.Router(),
    bodyParser = require('body-parser');

app.use(require('./controllers'));

app.set('views', './views');
app.set('view engine', 'ejs');

// Middleware
app.use(function(req, res, next) {
    console.log('%s request to %s from %s', req.method, req.path, req.ip);
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false})); 


app.listen(port);
console.log('Server started on ' + port);