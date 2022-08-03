const express = require('express');
const app = express();

app.get('/test', (req, res)=>{
    // localhost:port/endpoint
    // localhost:3000/test
    res.send('GET requets and this is the response');
});

app.listen(3000, ()=>{
    console.log('SERVER ARE WORKING ...');
});