var express = require('express'),
    app = express(),
    router = express.Router(),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override');

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

// GET ALL
router.get('/candies', function(req, res){
    res.json(candies);
});

// POST
router.post('/candies', function(req, res){
    // console.log(req.body);
    candy = req.body;
    candies.push(candy);
    res.json(candies);
});

// SHOW
router.get('/candies/:id', function(req, res){
    for (var i = 0; i < candies.length; i++){
        if (candies[i].id == req.params.id){
            candy = candies[i];
            res.json(candy);
        }
    }
});

// UPDATE
router.put('/candies/:id/', function(req, res){
    for (var key in candies){
        if (candies[key]["id"] == req.params.id){
            candy = req.body;
            candies[key] = candy;
        }
    }
    res.json(candy);
});

// DELETE
router.delete('/candies/:id', function(req, res){
    for (var key in candies){
        if(candies[key]["id"] == req.params.id){
            delete candies[key];
        }
    }
    res.json({message: 'deleted'});
});

app.use('/candies', router);
module.exports = router;