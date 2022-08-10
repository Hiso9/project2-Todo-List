// const express = require('express');
// const app = express();

// app.get('/test', (req, res)=>{
//     // localhost:port/endpoint
//     // localhost:3000/test
//     res.send('GET requets and this is the response');
// });

// app.listen(3000, ()=>{
//     console.log('SERVER ARE WORKING ...');
// });
const express = require('express');

const app = express();

app.use(express.json());

const db = [
  {fName:"user1",favFood:"food1"},
  {fName:"user1",favFood:"food1"},
  {fName:"user1",favFood:"food1"},
  {fName:"user1",favFood:"food1"},
  {fName:"user1",favFood:"food1"},
];

app.get('/week5', (req, res)=>{
    res.send('welcome to week 5');
});

app.listen(4000, ()=>{
    console.log(`SERVER ON localhost:4000`);
});
