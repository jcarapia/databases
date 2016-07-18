var models = require('../models'); 
var bluebird = require('bluebird');
var connection = require('../db')




module.exports = {
  messages: {
    
    get: function (req, res) {
      console.log('Hello World');
      connection.query('SELECT * FROM messages', function(err, results){
        
      res.send(results)
      
        console.log('These are the results from the GET', results)
      })
    }, // a function which handles a get request for all messages

    post: function (req, res) { // a function which handles posting a message to the database
      console.log('Hello World');
      //console.log('This is the body***', req);
      var obj = req.body//{username: "Valjean", message: "In mercy's name, three days is all I need.", roomname: "Hello"};
      connection.query('INSERT INTO messages SET ?', obj, function(err, results){
        
        if(err) throw err;
        //console.log('These are the results', req.body)
      })
        res.end() //needed after the query 

    } 
  },

  users: {
    // Ditto as above
    get: function (req, res) {  
      console.log('Hello World');
    },
    
    post: function (req, res) {
      console.log('Hello World');
      //console.log('This is the body', req)
      res.send('Hello')
    }

  }
  
};





































