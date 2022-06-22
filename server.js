const express = require('express');
const cors = require('cors');
const path = require('path');
const port = process.env.PORT || 5000;
const { connectToServer } = require('./db/dbConnect');

const app = express();

//cors
app.use(cors({ origin: true, credentials: true }));
//routes
app.use(require('./routes/routes'));

// perform a database connection when the server starts
connectToServer();

// serve static assets in production
if (process.env.NODE_ENV === 'production') {
    //Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));
}

// start the Express server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

