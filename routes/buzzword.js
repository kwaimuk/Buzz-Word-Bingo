/* jshint esversion: 6 */
var express = require('express');
var buzzword = express.Router();
const buzzWordsObj = {"buzzwords":[]};

//:id to designate req.params.id
buzzword.route('/')

  .get(function (req, res) {
    console.log(buzzWordsObj);
    res.json(buzzWordsObj);

  })

//push the body buzzword property into the object key buzzword with array called buzzwords
  .post(function (req, res) {
    buzzWordsObj.buzzwords.push(req.body.buzzword);
    console.log(buzzWordsObj);
    res.send(`hello `);
  })

  .put(function (req, res) {
    //update buzz word and heard property
    // res.json({,heard:true});
  })

  .delete(function (req, res) {
    res.json({success:true});
  });


module.exports =buzzword;