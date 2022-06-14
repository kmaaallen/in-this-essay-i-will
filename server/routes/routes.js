// ES support lacking in node.js driver - failing ci workflow when imports used so destructured
import express from 'express';
const { Router } = express;
// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /listings.
const routes = Router();

// This will help us connect to the database
import { getDb } from '../db/dbConnect.js';

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

export default routes;