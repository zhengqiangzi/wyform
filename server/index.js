var express= require("express");
var cors =  require("cors");
var bodyParser = require('body-parser')

var app =express();
var path=require("path");
var axios = require("axios");
	
app.use(bodyParser.json())
app.use(cors())
app.use("/static",express.static(path.resolve()+"/server/dist/static"))

app.get('/', function(req, res){

	//var fileName=path.resolve()+"/server/dist/index.html"
  	
  	//res.sendFile(fileName)
	var code = (req.params.code)
  	res.send("<h1>"+code +"</h1>")
});


app.post("/add",function(req,res){

	//console.log(req.body)
	res.send(req.body)
})



var server  =  app.listen(8080,function(){
	console.log(server.address())
	console.log('listen 8080')
});