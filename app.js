const express=require('express')
const app=express();

const routes=require('./routes/index');
const { get } = require('http');
app.use('/',routes)

app.listen(3000,()=>{console.log('listenin on port 3000')})


//The server what we are making is HTTP server: req res cycle

//STMP serrver: it doesnt work on req res cycle
//CRUD Operations

// Create---->post
// Read---->get
// Update--->patch
// Delete---->delete