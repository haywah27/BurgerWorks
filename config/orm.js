const connection = require("./connection.js");

const orm = {
    selectAll: function(cb){
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            console.log("in orm selectALL",result)
            cb(result);
        });
    },
    insertOne: function(newBurg, cb){
        var queryString = "INSERT INTO burgers (burger_name) VALUES (?)";
        connection.query(queryString, newBurg,
            function (err, result) {
                if (err) throw err;
                console.log(result)
                cb(result);
            });
    },
    updateOne: function(updateBurg){
        var queryString = "UPDATE burgers SET devoured = 1 WHERE burger_name = ??";
        connection.query(queryString, [updateBurg], function (err, result) {
            if (err) throw err;
            console.log(result)
        });
    }
}


module.exports = orm;