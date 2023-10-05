const express = require('express');
const router = express.Router();
const schemas = require('../models/schemas');
const multer = require('multer');
const path = require('path');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../../uploads'));
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});
const upload = multer({ 
    limits: {
        fileSize: 20 * 1024 * 1024
    }, 
    storage: storage 
});


router.delete('/', async(req, res) => {
    const { id } = req.body;

    const deleteArticle = await schemas.Articles.findByIdAndDelete(id);

    if (deleteArticle) {
        res.send('Delete was Successful!!');
    } else {
        res.status(404).send('Article not found');
    }
    
    res.end()
})

router.put('/', async(req, res) => {
    const { id, title, date, content } = req.body;

    /*const articleData = {
        title: title, 
        date: date, 
        content: content
    };*/

    const updatedArticle = await schemas.Articles.findByIdAndUpdate(
        id,
        { title, date, content },
        //{ new: true }
    );
    
    if (updatedArticle) {
        res.send('Update was Successful!!');
    } else {
        res.status(404).send('Article not found');
    }

    res.end()
});


router.post('/', upload.single('img'), async(req, res) => {

    const { title, date, content } = req.body;

    const articleData = {
        title: title, 
        date: date, 
        content: content, 
        imgPath: req.file.filename,
        imgContentType: 'image/png'
    };
    const newArticle = new schemas.Articles(articleData);
    const saveArticle = await newArticle.save();
    
    if (saveArticle) {
        res.send('Succes!!!!!');
    }

    res.end()
})

router.get('/', async (req, res) => {

    const articles = schemas.Articles;
    const articleData = await articles.find({}).exec();
    if (articleData) {

        res.send(JSON.stringify(articleData))
    };
})


module.exports = router;