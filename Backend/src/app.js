const express = require('express');
const app = express();
const airoutes = require("../src/routes/ai.routes");


app.use('/ai' , airoutes);

app.get('/' , (req,res)=>{
    res.send('Hello World');
})

module.exports = app ;