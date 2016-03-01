var express = require('express'),
    app = express(),
    router = express.Router();

app.set('views', './views');
app.set('view engine', 'ejs');

// Middleware
app.use(function(req, res, next) {
    console.log('%s request to %s from %s', req.method, req.path, req.ip);
    next();
});


router.get('/', function(req, res){
    res.render('index', { header: 'index!'});
});

router.get('/contact', function(req, res){
    res.render('contact', { header: 'contact!'});
});

router.get('/about', function(req, res){
    res.render('about', {header: 'about!'});
});

app.use('/', router);

module.exports = router;