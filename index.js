const express= require("express");
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));


app.get('/' , function(req, res){
  res.render('home')
})
app.get('/contact' , function(req, res){
  res.render('contact')
})
app.get('/pricing' , function(req, res){
  res.render('pricing')
})
app.get('/random' , function(req, res){
  const rand = Math.floor(Math.random() * 10) + 1;
  res.render('random', {rand})
})
app.get('/r/:subreddit' , function(req, res){
  const {subreddit} = req.params;
  res.render('subreddit', {subreddit});
});

// app.get('*' , function(req, res){
//   res.send('oups couldnt find this one')
// })


app.listen(3000, function(){
  
  console.log(`listening to port number 3000`)
})