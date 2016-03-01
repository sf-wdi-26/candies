var express = require('express'),
    app = express(),
    router = express.Router();

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
