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

//production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')));
}

// perform a database connection when the server starts
connectToServer();

// start the Express server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

