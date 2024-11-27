// function add(a,b){
//     return a+b;
// }
// var add=function add(a,b){
//     return a+b;
// }
// var add=(a,b)=>{return a+b;}
// var result=add(2,7);
// console.log(result);
// (function(){
//     console.log("my name");
// })();
// function callback(){
//     console.log("now adding is complete");
// }
// const add=function(a,b,callback){
//     var result=a+b;
//     console.log("result is: "+result);
//     callback();
// }
// //callback is a function when any task is complete callback function is working(function calling under one function)
// add(2,3,callback);
// add(2,3,()=>console.log("add completed"))
// var fs=require('fs');
// var os=require('os');
// var user=os.userInfo();
// console.log(user);
// fs.appendFile('greeting.txt','hi'+user.username+'!\n',()=>{console.log("file is created");});
// var notes=require('./notes.js')
// var age=notes.age;
// console.log(age);
// var _ = require('lodash');
// var data=["person","person","name","age",2,1,2,1];
// var filter=_.uniq(data);
// console.log(filter);
// const objectToConvert={
//     name:"alice",
//     age:21
// };
// const json=JSON.stringify(objectToConvert);
// console.log(json);
const express = require('express')
const app = express();
const db=require('./db');
const bodyParser=require('body-parser');
app.use(bodyParser.json());

const { models } = require('mongoose');

const Person=require('./models/person.js');
const MenuItem=require('./models/MenuItem.js');






app.get('/', function (req, res) {
  res.send('Hello World hey...')
})

const personRoutes=require('./routes/personRoutes.js');
app.use('/person',personRoutes);

const menuRoutes=require('./routes/personRoutes.js');
app.use('/menu',menuRoutes);

// app.get('/chicken', (req, res) => {
//     res.send('nohik mp')
//   })
//   app.get('/idli', (req, res) => {
//     res.send('Hello world')
//   })
//   app.post('/item', (req, res) => {
//     res.send('Hello world')
//   })

app.listen(3000,()=>{
    console.log('listening')
})