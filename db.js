const mongoose=require('mongoose');


//define the mongoDB connectionUrl;
const mongoUrl="mongodb://localhost:27017/hotels" //(you can replace the name hotel as of your project reqiurements)

//set up mongoDB connection
 mongoose.connect(mongoUrl)

//get the default connection
//mongoose maintains a default connection object representing the MongoDB connection
const db=mongoose.connection;

//define event listener for database connections
db.on('connected',() => {
console.log('connected to mongoDB server');
})
db.on('error',(err) => {
    console.error('mongoDB connection error',err);
    })

db.on('disconnected',() => {
        console.log('disconnected to mongoDB server');
        })
//export the database connections
module.exports=db;

