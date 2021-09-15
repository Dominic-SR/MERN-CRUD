//Thirdparty module
const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require("cors");
require('dotenv/config')

//Body-parser
app.use(express.json());

//Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

//Router
const Personrouter = require('./Router/PersonsRoute');
app.use('/persons',Personrouter);
const userRouter = require('./Router/userRouter');
app.use('/api',userRouter);
const CatgoryRoute = require('./Router/CatgoryRoute');
app.use('/api',CatgoryRoute);
const ProductRoute = require('./Router/ProductRoute');
app.use('api/',ProductRoute);

//LocalHost
app.listen(2000,() => {
    console.log('Server Started On 2000');
})

//Db server Creation
mongoose.set('useNewUrlParser',true);
mongoose.set('useUnifiedTopology',true);
mongoose.connect(process.env.MYDB_CONNECTION,(err) =>{
    if(err){
        console.log('DB not Connected');
    }
    console.log('DB Connected Successfully');
})

