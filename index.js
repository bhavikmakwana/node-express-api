const express  = require('express');
const bodyParser  = require('body-parser');
const mongoose = require('mongoose');
const app = express();

//mongo db connection 
mongoose.connect('mongodb://localhost/mean');
mongoose.Promise = global.Promise;


app.use(bodyParser.json());
app.use('/api', require('./routes/api'));
app.use('/employee',  require('./routes/employee'));

//error handle middlerware
app.use((err,req,res,next)=>{
    console.log(err);
    res.status(422).res.send({error:err.message});  
});
let port = process.env.port || 3000;
app.listen(port,()=>{console.log(`application listing port on ${port}`)});