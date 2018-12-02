var express = require('express')
var fs = require('fs')
var app = express()
app.use(express.static('public'))
app.use(express.json())
app.get('/workshop', function(req,res){
  if (req.query.name=="notation"){
    res.sendFile(__dirname + "/select.html")
  }
  else if (req.query.name=="css"){
    res.sendFile(__dirname + "/style.css")
  }
  else if (req.query.name=="js"){
    res.sendFile(__dirname + "/script.js")
  }
})

app.listen(3000, function(){
  console.log("Vous êtes bien sur le port : 3000")
})
