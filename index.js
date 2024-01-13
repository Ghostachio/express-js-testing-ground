const express= require("express")
const app = express();

app.get('/' , function(req, res){
  res.send('hello this is the home page')
})
app.get('/contact' , function(req, res){
  res.send('hello this is the contact page')
})
app.get('/pricing' , function(req, res){
  res.send('hello this is the picing page')
})
app.get('/r/:subreddit' , function(req, res){
  const {subreddit} = req.params;
  res.send(`hello you are currently in the ${subreddit} category`)
});


app.listen(3000, function(){
  
  console.log(`listening to port number 3000`)
})