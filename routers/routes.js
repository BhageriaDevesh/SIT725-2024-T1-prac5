const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');

router.post('/cats', controller.createCat);
router.get('/cats', controller.getAllCats);

// Default route
router.get('/', (req, res) => {
    res.send('Welcome to the API');
});

module.exports = router;
