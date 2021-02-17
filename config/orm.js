const connection = require("./connection.js");

const orm = {
    // select all from table query, parameters unknown at this point so set future parameters to variables
    selectAll: function(cb){
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            console.log("in orm selectALL",result)
            cb(result);
        });
    },
    // create new column in burgers table
    insertOne: function(newBurg, cb){
        var queryString = "INSERT INTO burgers (burger_name) VALUES (?)";
        connection.query(queryString, newBurg,
            function (err, result) {
                if (err) throw err;

                cb(result);
            });
    },
    // update burger devoured variable to true (1)
    updateOne: function(updateBurg, cb){
        var queryString = "UPDATE burgers SET ? WHERE ?";
        connection.query(queryString, [{devoured: 1}, {id: updateBurg}], 
            function (err, result) {
                if (err) throw err;

                cb(result);
            });
    },
}


module.exports = orm;