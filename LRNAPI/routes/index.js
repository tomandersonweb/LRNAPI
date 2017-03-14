var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {

    res.json([{
        "id": "16296355",
        "url": "r16296355_manchester",
        "text": "Manchester"
    },
        {
            "id": "16844357",
            "url": "k16844357_manchester-city-centre",
            "text": "Manchester City Centre"
        }]);   
});

module.exports = router;