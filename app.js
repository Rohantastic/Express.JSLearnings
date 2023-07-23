const express = require('express');
const app = express();
const file = __dirname + "/" + "index.html";

app.get("/",(req,res)=>{
    res.sendFile(file);
});


app.listen(1234,()=>{
    console.log('Sending Signal');
});