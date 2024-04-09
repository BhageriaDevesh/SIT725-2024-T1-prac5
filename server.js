const express = require("express");
const app = express();
const { MongoClient } = require('mongodb');

// Serve static files from the 'public' directory
app.use(express.static(__dirname + '/public'));

// Middleware to parse JSON and URL-encoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// MongoDB connection string (replace <password> with actual password)
const uri = 'mongodb+srv://Devesh:admin@cluster0.c7elije.mongodb.net/<task4>?retryWrites=true&w=majority&appName=Cluster0';

// Function to connect to MongoDB
async function connectToMongoDB() {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        // Connect to MongoDB
        await client.connect();
        console.log('Connected to MongoDB');

        // Store the MongoDB client in app.locals for use in route handlers
        app.locals.dbClient = client;
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1); // Exit the process if unable to connect to MongoDB
    }
}

// Initialize MongoDB connection
connectToMongoDB();

// POST route to store form data in MongoDB
app.post('/api/cats', async (req, res) => {
    const dbClient = req.app.locals.dbClient;

    try {
        // Get form data from request body
        const formData = req.body;

        // Access the database
        const database = dbClient.db('task4');

        // Access the collection
        const collection = database.collection('cats');

        // Insert form data into the collection
        const result = await collection.insertOne(formData);
        console.log('Form Data Stored in MongoDB:', result.insertedId);

        // Send success response
        res.status(200).json({ message: 'Form Data Submitted Successfully' });
    } catch (error) {
        console.error('Error storing form data in MongoDB:', error);
        res.status(500).json({ message: 'Failed to store form data' });
    }
});

// Handle GET requests to "/api/cats"
app.get('/api/cats', async (req, res) => {
    const dbClient = req.app.locals.dbClient;

    try {
        // Access the database
        const database = dbClient.db('task4');

        // Access the collection
        const collection = database.collection('cats');

        // Find all documents in the collection
        const cursor = collection.find();

        // Convert cursor to array
        const data = await cursor.toArray();

        // Send the fetched data as a response
        res.json(data);
    } catch (error) {
        console.error('Error fetching data from MongoDB:', error);
        res.status(500).json({ message: 'Failed to fetch data' });
    }
});


// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("App listening on port:", port);
});
