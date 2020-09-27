let express = require('express');
let app = express();
let path = require('path')
let dotenv = require('dotenv');
let bodyParser = require('body-parser');
let ejs = require('ejs')

// Config dotenv
dotenv.config()
const PORT = process.env.PORT;

// Call Template engine
app.set('view engine', 'ejs');

//  Router
app.get('/', (req, res) =>{
    res.render('pages/index')
})


// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static('public'));

// Middle Route






app.listen(PORT, ()=> {
    console.log("Listenning on port 3000")
})