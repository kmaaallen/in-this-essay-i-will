import express from 'express';
import * as url from 'url';
import { connectToServer } from './db/dbConnect.js';
import routes from './routes/routes.js';
import cors from 'cors';
import path from 'path';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const app = express();

//static files
app.use("/static", express.static(__dirname + '../static'));
//cors
app.use(cors({ origin: true, credentials: true }));
//routes
app.use(routes);

// perform a database connection when the server starts
connectToServer();

// Get index page
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname + '../src/index.html'));
});

// start the Express server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

