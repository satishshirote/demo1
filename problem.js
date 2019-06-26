var express=require("express");
var app=express();

var p=function(req,res)
{
   var customer=[
        {id:1,name:"satish shirote",country:"india",company:"cybage",accno:"1110000"},
		{id:2,name:"james lie",country:"Australia",company:"sibel",accno:"1110001"},
		{id:3,name:"ken piter",country:"USA",company:"oracle",accno:"1110002"},
		{id:4,name:"richerd jonsan",country:"England",company:"google",accno:"1110003"},
		{id:5,name:"sameer dehadrai",country:"singapoor",company:"microsoft",accno:"1110004"},
        
   
   ];
    res.send(customer);   
};

app.get('/customer',p);

var server=app.listen(2000,function()
{

   var add=server.address().address
   var host=server.address().port

});