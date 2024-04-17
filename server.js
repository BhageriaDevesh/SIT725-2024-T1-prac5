const express = require('express');
const app = express();
const path = require('path');
const dbConnection = require('./dbconnection');
const routes = require('./routers/routes');

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to parse JSON and URL-encoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Use routes
app.use('/api', routes);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("App listening on port:", port);
});
