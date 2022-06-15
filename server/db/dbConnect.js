// ES support lacking in node.js driver - failing ci workflow when imports used so destructured
import mongodb from 'mongodb';
const { MongoClient } = mongodb;
const { ServerApiVersion } = mongodb;
import dotenv from "dotenv";

dotenv.config()

let greendb;

const connectionString = process.env.MONGO_DB_URI;
const client = new MongoClient(connectionString, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


export const connectToServer = function () {
    client.connect((err, db) => {
        if (db) {
            greendb = db.db("GP");
            console.log("Connected to DB successfully");
        } else {
            console.error(err);
        }
    });
}

export const getDb = function () {
    return greendb;
}