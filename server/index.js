var express= require("express");
var cors =  require("cors");
var bodyParser = require('body-parser')

var app =express();
var path=require("path");
	
app.use(bodyParser.json())
app.use(cors())
app.use("/static",express.static(path.resolve()+"/server/dist/static"))

app.get('/', function(req, res){

	var fileName=path.resolve()+"/server/dist/index.html"
  	
  	res.sendFile(fileName)
});


app.post("/add",function(req,res){

	//console.log(req.body)
	res.send(req.body)
})



app.listen(8080,function(){

	console.log('listen 8080')
});