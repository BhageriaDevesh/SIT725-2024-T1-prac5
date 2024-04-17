const CatModel = require('../models/cat');

async function createCat(req, res) {
    try {
        await CatModel.createCat(req.body);
        res.status(200).json({ message: 'Cat created successfully' });
    } catch (error) {
        console.error('Error creating cat:', error);
        res.status(500).json({ message: 'Failed to create cat' });
    }
}

async function getAllCats(req, res) {
    try {
        const cats = await CatModel.getAllCats();
        res.status(200).json(cats);
    } catch (error) {
        console.error('Error fetching cats:', error);
        res.status(500).json({ message: 'Failed to fetch cats' });
    }
}

module.exports = { createCat, getAllCats };
