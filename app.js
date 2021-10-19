const express = require("express");
const mongoose = require('mongoose');
const app = express();

const mongodb = require('mongodb');

var url = "mongodb+srv://admin:admin@cluster0.xofnl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

// Get the default connection

var db = mongoose.connection;

// Bind connection to error event

db.on('error', console.error.bind(console,"MongoDB connection error: "));


const port = 3000;

mongoose.connect(url, { useNewUrlParser: true});
const connect = mongoose.connection;
app.use(express.json());
try{
    connect.on("open", () => {
        console.log('connected');
    });
}catch(error){
    console.log("Error: " + error);
}


// Path creation

const appShopRouter = require('./router/shopRouter');
app.use('/appRouter', appShopRouter);

const appCategoryRouter = require('./router/categoryRouter');
app.use('/appRouter', appCategoryRouter);