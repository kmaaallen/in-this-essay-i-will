const mongodb = require('mongodb');
const dotenv = require('dotenv');

dotenv.config()

let greendb;

const connectionString = process.env.MONGO_DB_URI;
const client = new mongodb.MongoClient(connectionString, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: mongodb.ServerApiVersion.v1 });


const connectToServer = () => {
    client.connect((err, db) => {
        if (db) {
            greendb = db.db("GP");
            console.log("Connected to DB successfully");
        } else {
            console.error(err);
        }
    });
}

const getDb = () => {
    return greendb;
}

exports.connectToServer = connectToServer;
exports.getDb = getDb;