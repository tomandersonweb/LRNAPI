var express = require('express');
var router = express.Router();
var obj = require("../public/javascripts/JSON.json");

router.get('/search/:term', function (req, res) {

    if (req.params.term.length < 3)
        res.send("Sorry that was too short");

    res.json(obj);   
});

router.get('/details/:id', function (req, res) {

    if (req.params.id.length < 3)
        res.send("Sorry that was too short");

    res.json(obj[0]);
});

module.exports = router;