// import express
// import burger.js
// create router and export at end of file

const express = require("express");
const burg = require("../models/burger");
var router = express.Router();

router.get("/", function(req, res) {
   burg.selectAll(function(data){
    res.render('index', { burgers: data } );
   });
    // console.log(res)
    //   index is handlebars
});


router.post("/", function(req, res) {
    // console.log(typeof req.body.newBurger)
    burg.insertOne(req.body.newBurger, function(){
        res.redirect('/');
    })

});



router.post("/:id", function(req, res) {
    burg.updateOne(req.params.id, function(){
        res.redirect('/');
    });
});


router.get("/api/burgers", function(req, res) {
    burg.selectAll(function(data){
     res.json(data);
    });

 });


module.exports = router;