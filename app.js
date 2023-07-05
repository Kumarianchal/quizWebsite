var express=require("express");
var app=express();
var request=require("request");
var bodyParser=require("body-parser");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");

app.get("/",function(req,res){
	res.render("index");
})

app.get("/questions/result",function(req,res){
	res.render("end");
})


app.get("/questions",function(req,res){
	request("https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple",function(error,response,body){       //or   ,(error,response,body)=>{
		if(!error && response.statusCode==200){
			
			var data=JSON.parse(body);            //to bring in JSON format
	        //console.log(data.results[0]);
	        res.render("questions",{questions: data.results});
			
		}
	})
});
app.listen(3100,function(){
  console.log("Answer the Questions!");
});
