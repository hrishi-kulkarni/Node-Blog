const express = require('express');
const app = new express();
const path = require('path');
const expressEdge = require('express-edge');
const mongoose = require('mongoose');

app.use(express.static('public'));
app.use(expressEdge);
app.set('views', `${__dirname}/views`);

mongoose.connect('mongodb://localhost/node-js-blog');

app.get('/', (req, res)=>{
    //res.sendFile(path.resolve(__dirname, 'pages/index.html'));
    res.render('index');
});

app.get('/about', (req, res) => {
    //res.sendFile(path.resolve(__dirname, 'pages/about.html'));
    res.render('about');
});

app.get('/post', (req, res) => {
    //res.sendFile(path.resolve(__dirname, 'pages/post.html'));
    res.render('post');
});

app.get('/contact', (req, res) => {
    //res.sendFile(path.resolve(__dirname, 'pages/contact.html'));
    res.render('contact');
});

app.listen(4000, ()=>{
    console.log("app started on port 4000");
});