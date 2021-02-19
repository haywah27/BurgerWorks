const mysql = require('mysql');

let connection;


if(process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWS_URL);
} else {
  connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'yourRootPassword',
    database: 'burgers_db'
  })
}



// Connect to the DB
connection.connect((err) => {
    if (err) throw err;
    console.log(`connected to mysql server as id ${connection.threadId}\n`);
});

module.exports = connection;