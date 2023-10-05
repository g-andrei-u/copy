const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const articlesRouter = require('./routes/articlesRouter');
const userRouter = require('./routes/userRouter');
const mongoose = require('mongoose');
require('dotenv/config');
const path = require('path');


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false }));


const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccesStatus: 200
};

app.use(cors(corsOptions));
app.use('/articles', articlesRouter);
app.use('/user', userRouter)
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

const dbOptions = {useNewUrlParser:true, useUnifiedTopology:true};
mongoose.connect(process.env.DB_URI, dbOptions)
.then(() => console.log('DB Connected!'))
.catch(err => console.log(err))

const port = process.env.PORT;
const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})