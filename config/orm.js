// import connection.js
// these methods will execute in the controllers file
// * `selectAll()`
// * `insertOne()`
// * `updateOne()`

const connection = require("./connection.js");

const orm = {
    selectAll: function(){
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            console.log(result)
        });
    },
    insertOne: function(newBurg){
        var queryString = "INSERT INTO burgers SET burger_name VALUES ??";
        connection.query(queryString, newBurg, function (err, result) {
            if (err) throw err;
            console.log(result)
        });
    },
    updateOne: function(updateBurg){
        var queryString = "UPDATE burgers SET devoured = 1 WHERE burger_name = ??";
        connection.query(queryString, updateBurg, function (err, result) {
            if (err) throw err;
            console.log(result)
        });
    }
}


module.exports = orm;