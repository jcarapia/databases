var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".
var dbConnection;

dbConnection = mysql.createConnection({
      user: "root",
      password: "",
      database: "chat"
    });

dbConnection.connect(function(data, err){
 
  if(err){
    console.log('Error connecting to DB');
    return;
  }
  console.log('Connection established');
});

dbConnection.end(function(err){

})

module.exports = dbConnection;
//console.log(module.exports)


