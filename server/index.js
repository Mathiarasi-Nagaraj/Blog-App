const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan')
const helmet = require('helmet');
const bodyParser=require('body-parser')
const { env } = require('process');
const dotenv=require('dotenv');
const multer=require('multer');
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
//file upload
const diskstorage=multer.diskStorage(
    {
        destination:(req,file,cb)=>
        {
            cb(null,"./images")
        },
        filename:(req,file,cb)=>
        {
            cb(null,file.originalname);
        }
    }
);
const upload=multer({storage:diskstorage});
app.post("/api/upload",upload.single("file"),(req,res)=>
{
    res.status(200).json("file has been uploaded")
})
//route connection to app
const userRoutes=require('./Routes/user')
const postRoutes=require('./Routes/post')
app.use('/api/user',userRoutes)
app.use('/api/post',postRoutes)
app.set('port',5005)

app.listen(app.get('port'), () => {
    console.log(`Server is running in port `+app.get('port'));
})