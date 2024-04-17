const connectToMongoDB = require('../dbconnection');

async function createCat(catData) {
    const db = await connectToMongoDB();
    const collection = db.collection('cats');
    await collection.insertOne(catData);
}

async function getAllCats() {
    const db = await connectToMongoDB();
    const collection = db.collection('cats');
    return collection.find().toArray();
}

module.exports = { createCat, getAllCats };
