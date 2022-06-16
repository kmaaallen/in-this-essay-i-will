const express = require('express');
// The router will be added as a middleware and will take control of requests starting with path /listings.
const routes = express.Router();

// This will help us connect to the database
const { getDb } = '../db/dbConnect.js';

// Get a list of all the records.
routes.route('/posts').get(async function (_req, res) {
    const dbConnect = getDb();

    dbConnect
        .collection('posts')
        .find({})
        .limit(50)
        .toArray(function (err, result) {
            if (err) {
                res.status(400).send('Error fetching posts!');
            } else {
                res.json(result);
                console.log(res.json(result));
            }
        });
});

exports.routes = routes;