// import connection.js
// these methods will execute in the controllers file
// * `selectAll()`
// * `insertOne()`
// * `updateOne()`

const connection = require("./connection.js");

const orm = {
    selectAll: function(table){
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, table, function (err, result) {
            if (err) throw err;
            console.log(result)
        });
    },
    insertOne: function(table, columnName, newBurg){
        var queryString = "INSERT INTO ?? SET ?? VALUES ??";
        connection.query(queryString, [table, columnName, newBurg], function (err, result) {
            if (err) throw err;
            console.log(result)
        });
    },
    updateOne: function(table, updateBurg){
        var queryString = "UPDATE ?? SET devoured = 1 WHERE burger_name = ??";
        connection.query(queryString, [table, updateBurg], function (err, result) {
            if (err) throw err;
            console.log(result)
        });
    }
}


module.exports = orm;