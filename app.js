const express=require('express');
const path=require('path');
const app =express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Getting our routes routes 
const routes=require('./server/routes/routes');


//Using middleware
app.use(express.static(path.join(__dirname,'dist/auth-service')));
app.use('/routes',routes);


//CAtch all other routes request and return it to the index
app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname, 'dist/auth-service/index.html'));

})




const port =process.env.PORT||4600;
app.listen(port,(req,res)=>{
    console.log("RUNNING");    
})