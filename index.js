const express= require("express");
const app = express();
const path = require('path');
const redditData = require('./data.json');

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.set('public', path.join(__dirname, '/views'));


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

app.get('/cats', (req, res) => {
  const cats = ['said','easy', 'gypsy', 'miao']
  res.render('cats', {cats})
})
app.get('/r/:subreddit' , function(req, res){
  const {subreddit} = req.params;
  const data = redditData[subreddit];
  res.render('subreddit', {...data});
});
app.get('*' , function(req, res){
  res.render('notFound');
});





// app.get('*' , function(req, res){
//   res.send('oups couldnt find this one')
// })


app.listen(3000, function(){
  
  console.log(`listening to port number 3000`)
})
