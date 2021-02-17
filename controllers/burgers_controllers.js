// import express
// import burger.js
// create router and export at end of file

const express = require("express");
const burg = require("../models/burger");
var router = express.Router();

// get all burgers in burgers table and render to handlebars
router.get("/", function(req, res) {
   burg.selectAll(function(data){
    res.render('index', { burgers: data } );
   });
});

// from the submit field, create new burger and insert into burgers table, refresh page
router.post("/", function(req, res) {
    // console.log(typeof req.body.newBurger)
    burg.insertOne(req.body.newBurger, function(){
        res.redirect('/');
    })
});

// on eat it button click, update devoured to true, refresh page
router.post("/:id", function(req, res) {
    burg.updateOne(req.params.id, function(){
        res.redirect('/');
    });
});

// get all items in table and stringify it for posting raw table data
router.get("/api/burgers", function(req, res) {
    burg.selectAll(function(data){
     res.json(data);
    });
 });


module.exports = router;