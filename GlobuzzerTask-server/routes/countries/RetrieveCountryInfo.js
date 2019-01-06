var express = require('express');
var router = express.Router();
var mongodb = require('mongodb')
var mongoClient = mongodb.MongoClient


var mongoUrl = "mongodb://admin:admin123@ds149744.mlab.com:49744/globuzzer-home-page"

router.get('/:country', (req, res, next) => {
    mongoClient.connect(mongoUrl, { useNewUrlParser: true }, (err, db) => {
        if(err) return console.log(err)

        let dbo = db.db("globuzzer-home-page")
        
        console.log(req.params.country) 
        dbo.collection('Countries').findOne({'name': req.params.country}, (err, result) => {
            if(err) return console.log(err)

            res.send(result)                                                          
        })
    })
})



module.exports = router