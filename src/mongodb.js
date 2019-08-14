const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;


const connectionUrl = 'mongodb://127.0.0.1:27017';
const databaseName = 'demodb';

MongoClient.connect(connectionUrl,{useNewUrlParser:true},(error,result)=>{

    if(error){
        return console.log("Unable to connect with DataBase !");
    }
    
    console.log('Connection has been established Successfully ! ');
   
    const db = result.db(databaseName);
    
    

});
