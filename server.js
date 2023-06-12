const express=require('express');
const dotenv=require('dotenv');
const morgan=require('morgan');
const connectDB=require('./config/db');

// Load ENV vars
dotenv.config({path:'./config/config.env'});

//Connect Database
connectDB();

const app=express();

//Body parser

app.use(express.json());



//Route files
const user=require('./routes/user');
const feed=require('./routes/feed');
const FeedEntry=require('./routes/feedentry');
const UserFeedEntry=require('./routes/userfeedentry');
//const resetPassword=require('./routes/resetPassword');

//Mount Routers
app.use('/api/v1/user',user);
app.use('/api/v1/feed',feed);
app.use('/api/v1/feedentry',FeedEntry);
app.use('/api/v1/userfeedentry',UserFeedEntry);
//app.use('/api/v1/user/resetPassword',resetPassword);

//Logging
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}

const PORT=process.env.PORT || 5000;
app.listen(PORT, console.log('Server is running'));