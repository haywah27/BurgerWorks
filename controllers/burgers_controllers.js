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


router.get("/api/burgers", function(req, res) {

});


module.exports = router;