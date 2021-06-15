const express = require ('express')
const app = express ()
let ejs = require('ejs')
const port = 4000 

app.use( express.static( "public" ) )
app.set('view engine', 'ejs');
app.set('views','./views');

app.get('/', function(req, res,) {
    res.render('pages/home');
});
app.get('/ourservices', function(req, res,) {
    res.render('pages/ourservices');
});
app.get('/contactus', function(req, res,) {
    res.render('pages/contactus');
});
// app.get('/', (req, res) => {
//   res.send('Hello Worljmkllkkjgvcckkkkkkkjjjd!')
// })








app.listen (port, ()=> console.log (`server running on http://
localhost:${port}`) )
