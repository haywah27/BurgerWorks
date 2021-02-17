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
    updateOne: function(updateBurg, cb){
        var queryString = "UPDATE burgers SET ? WHERE ?";
        connection.query(queryString, [{devoured: 1}, {id: updateBurg}], 
            function (err, result) {
                if (err) throw err;
                console.log(result)
                cb(result);
            });
    }
}


module.exports = orm;