var models = require('../models');
var bluebird = require('bluebird');
var connection = require('../db')



module.exports = {
  messages: {
    get: function (req, res) {
      connection.query("SELECT * FROM messages", function(err,row){
        if(err) throw err;
        console.log('Inside Query')
      res.send(JSON.stringify(row));

      });
      //console.log('This is the data**********', req.body)
      //console.log(row);
    }, // a function which handles a get request for all messages

    post: function (req, res) { // a function which handles posting a message to the database
      //var message = {username: "Valjean", message: "In mercy's name, three days is all I need.", roomname: "Hello"};
      connection.query("INSERT INTO messages SET ?",req.body, function(err,res){
        if(err) throw err;
        console.log('Inside Query*****************', req.body)
      //res.end('finished')
      });
      res.send();

      //console.log('This is the data1234556234235', req.body) //req.body is Express data
    } 
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      res.send("hello world")

    },
    post: function (req, res) {
      res.send("hello world")

    }
  }
};

