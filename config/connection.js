const mysql = require('mysql');

let connection;
// = mysql.createConnection({
//     host: 'd6rii63wp64rsfb5.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
//     port: 3306,
//     user: 'c1yq4ps7yo51mfwt',
  
//     // Be sure to update with your own MySQL password!
//     password: 'fkz0hn623xdpd25p',
//     database: 'l68vbvbw1q628ee8',
//   });

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