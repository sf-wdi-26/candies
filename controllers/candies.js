var express = require('express'),
    app = express(),
    router = express.Router(),
    bodyParser = require('body-parser');

var candies = [{
    id: 16,
    name: "Chewing Gum",
    color: "Red"
},
{
    id: 20, 
    name: "Pez",
    color: "Green"
},
{
    id: 304,
    name: "Marshmallow",
    color: "Pink"
},
{
    id: 404,
    name: "Candy Stick",
    color: "Blue"
}];

var candy = {};

router.get('/candies', function(req, res){
    res.json(candies);
});

router.post('/candies', function(req, res){
    // console.log(req.body);
    candy = req.body;

    candies.push(candy);
    res.json(candies);
});

router.get('/candies/:id', function(req, res){
    for (var i = 0; i < candies.length; i++){
        if ( req.params.id == candies[i].id){
            candy = candies[i];
            res.json(candy);
        }
    }
});

app.use('/', router);
module.exports = router;