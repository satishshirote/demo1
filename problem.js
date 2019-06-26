var express=require("express");
var app=express();

var p=function(req,res)
{
   var customer=[
        {id:1,name:"satish shirote",address:"mv road ,mumbai",company:"cybage",accno:"1110000"},
		{id:2,name:"satish shirote",address:"mv road ,mumbai",company:"cybage",accno:"1110000"},
		{id:3,name:"satish shirote",address:"mv road ,mumbai",company:"cybage",accno:"1110000"},
		{id:4,name:"satish shirote",address:"mv road ,mumbai",company:"cybage",accno:"1110000"},
		{id:5,name:"satish shirote",address:"mv road ,mumbai",company:"cybage",accno:"1110000"},
        
   
   ];
    res.send(customer);   
};

app.get('/customer',p);

var server=app.listen(2000,function()
{

   var add=server.address().address
   var host=server.address().port

});