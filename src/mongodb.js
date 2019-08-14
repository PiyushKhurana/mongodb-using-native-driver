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
    
    /**
     * InsertOne
     * Using Callback pattern 
     */

    db.collection('users').insertOne({
        name:'test name 1',
        age:'test age 1',
        email:'Test1@test.com',
        address:'test address 1'
    },(error,result)=>{

        if(error){
            return console.log('Something went wrong while inserting !');
        }

        console.log(result.ops);
        
    });

    /**
     * InsertOne
     * Using Promise 
     */

    db.collection('users').insertOne({
        name:'test name 2',
        age:'test age 2',
        email:'Test2@test.com',
        address:'test address 2'
    })
    .then(result => console.log(result.ops))
    .catch(error => console.log('Something went wrong while inserting !'));
    
    /**
     * InsertMany
     * Using Callback 
     */
    
    db.collection('users').insertMany(
        [
            {
                name:'test name 3',
                age:'test age 3',
                email:'Test3@test.com',
                address:'test address 3'
            },
            {
                name:'test name 4',
                age:'test age 4',
                email:'Test4@test.com',
                address:'test address 4'
            }
        ],(error,result)=>{
            if(error){
                return console.log('Something went wrong while inserting !');
            }
            console.log(result.ops);
    });

    /**
     * InsertMany
     * Using Promise 
     */
    db.collection('users').insertMany(
        [
            {
                name:'test name 3',
                age:'test age 3',
                email:'Test3@test.com',
                address:'test address 3'
            },
            {
                name:'test name 4',
                age:'test age 4',
                email:'Test4@test.com',
                address:'test address 4'
            }
        ])
        .then(result => console.log(result.ops))
        .catch(error => console.log('Something went wrong while inserting !'))
           
    
});
