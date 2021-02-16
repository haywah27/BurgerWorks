const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
  
    // Be sure to update with your own MySQL password!
    password: 'yourRootPassword',
    database: 'burgers_db',
  });


// Connect to the DB
connection.connect((err) => {
    if (err) throw err;
    console.log(`connected to mysql server as id ${connection.threadId}\n`);
});

module.exports = connection;