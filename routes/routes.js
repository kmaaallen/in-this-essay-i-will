const express = require('express');
// The router will be added as a middleware and will take control of requests starting with path /listings.
const routes = express.Router();

// This will help us connect to the database
const { getDb } = require('../db/dbConnect');

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

// Get a list of all the posts.
routes.route("/posts").get(function (req, res) {
    let dbConnect = getDb();
    dbConnect
        .collection("posts")
        .find({})
        .toArray(function (err, result) {
            if (err) throw err;
            res.json(result);
        });
});

// Get a single post by id
routes.route("/post/:id").get(function (req, res) {
    let dbConnect = getDb();
    let myquery = { _id: ObjectId(req.params.id) };
    dbConnect
        .collection("posts")
        .findOne(myquery, function (err, result) {
            if (err) throw err;
            res.json(result);
        });
});

// Get a list of all the resources.
routes.route("/resources").get(function (req, res) {
    let dbConnect = getDb();
    dbConnect
        .collection("resources")
        .find({})
        .toArray(function (err, result) {
            if (err) throw err;
            res.json(result);
        });
});

module.exports = routes;