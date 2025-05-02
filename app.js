const express=require('express')
const app=express();

const routes=require('./routes/index');
require('./database/models/index')

app.use(express.json())
app.use('/',routes)

app.listen(3000,()=>{console.log('listening on port 3000')})


//The server what we are making is HTTP server: req res cycle

//SMTP serrver: it doesnt work on req res cycle
//CRUD Operations

// Create---->post
// Read---->get
// Update--->patch
// Delete---->delete