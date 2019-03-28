
var express = require("express");
console.log("Let's find out what express is", express);

var app = express();
console.log("Let's find out what app is", app);


app.set('views', __dirname + '/views'); 

app.set('view engine', 'ejs');
app.get('/', function(request, response) {
    
   console.log("The request object", request);
   console.log("The response object", response);
   
   response.send("<h1>Hello Express</h1>");
})

app.get("/cars", function (request, response){
    console.log(request);
    response.render('cars');
})

app.get("/cats", function (request, response){
    console.log(request);
    response.render('cats');
})

app.get("/cars/new", function (request, response){
    console.log(request);
    response.render('new');
})




app.use(express.static(__dirname + "/static"));

 



app.listen(8000, function() {
    console.log("listening on port 8000");
  })







