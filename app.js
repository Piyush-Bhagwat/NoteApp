const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const app = express();


app.use(express.static('public')); //for static files
app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs');


const note = {
    title: "Day 1 - I am great as Fuck",
    content: "Its the first ever note to be DIsplayed on the App",
    date: "3-sep-22",
    tags:['great', 'note', 'sadd', 'asdd', 'sdasdad']
}



app.get('/', function(req, res){
    res.render("home", {title: note.title, content: note.content, noteDate: note.date, tags: note.tags});
});

app.listen(3000, function(){
console.log('app started @ localhost 3000');
});