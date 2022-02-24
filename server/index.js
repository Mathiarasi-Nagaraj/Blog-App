const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan')
const helmet = require('helmet');
const bodyParser=require('body-parser')
const { env } = require('process');
const dotenv=require('dotenv');
dotenv.config();
mongoose.connect(env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', (err) => {
    console.log("errr",err)
})
db.once('open', () => {
    console.log('Database connection established');
})
const app = express();
//middleware
app.use(helmet())
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

//route connection to app
const userRoutes=require('./Routes/user')
const PORT = 8000 || env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running in port ${PORT}`);
})