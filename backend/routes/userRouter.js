const express = require('express');
const router = express.Router();
const schemas = require('../models/schemas');


router.post('/', async(req, res) => {

    const { username, password } = req.body;

    try {
        const user = await schemas.User.findOne({ username });
        
        if (user && user.password === password) {
            res.status(200).json({ message: 'Login successful' });
        } else {
            res.status(401).json({ error: 'Invalid username or password' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})


module.exports = router