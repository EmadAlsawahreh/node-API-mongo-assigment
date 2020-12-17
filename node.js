const express = require('express');
const app = express();
const readlineSync = require('readline-sync');
const fs = require('fs-extra');
const mongoose = require('mongoose');
const db = mongoose.connect('mongodb://localhost/TShirtsDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
let Category = require('./Modules/Category');
let TShirt = require('./Modules/TShirt');




// routes
//GETs ==================================================

app.get('/', function (req, res) {
  res.status("200").send('for the gd sake work ..');

})
app.get('/Category', function (req, res) {
  Category.find({},function(err,Category)
 {
   if(err){ res.status(500).send({error:"Couldn't get TShirts"});}else{ res.status(200).send(Category);}
 })
})

app.get('/TShirt', function (req, res) {
  
 TShirt.find({},function(err,TShirt)
 {
   if(err){ res.status(500).send({error:"Couldn't get TShirts"});}else{ res.status(200).send(TShirt);}
 })
})

//POSTS   ==================================================
app.post('/TShirt', function (req, res) {
  let newTShirt=new TShirt();
  newTShirt._id=req.body._id;
  newTShirt.TshirtName=req.body.TshirtName;
  newTShirt.TshirtCategoryID=req.body.TshirtCategoryID;
  newTShirt.TshirtPrice=req.body.TshirtPrice;
  newTShirt.NumberOfAvailableItems=req.body.NumberOfAvailableItems;
  newTShirt.save(function(err,SavedTShirt)
  {
    if(err)
    {
      res.status(500).send({error:"Couldn't add TShirt"});
    }else
    {
      res.send(SavedTShirt)
    }
  }) // this is mean save this data to DB
})

app.post('/Category', function (req, res) {
  let newCategory=new Category();
  newCategory._id=req.body._id;
  newCategory.CategoryName=req.body.CategoryName;
  newCategory.save(function(err,SavedCategory)
  {
    if(err)
    {
      res.status(500).send({error:"Couldn't add TShirt"});
    }else
    {
      res.send(SavedCategory)
    }
  })
})











//start listening to server
app.listen(3000);
//app.listen(3000,function(){console.log("It's work.")}); or u can use this to check if its work