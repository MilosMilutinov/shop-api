const express = require("express");
const mongoose = require('mongoose');
const app = express();

const mongodb = require('mongodb');

var url = "mongodb+srv://admin:admin@cluster0.xofnl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

// Get the default connection

var db = mongoose.connection;

// Bind connection to error event

db.on('error', console.error.bind(console, "MongoDB connection error: "));

// Our default port
const port = 2000;

mongoose.connect(url, { useNewUrlParser: true });
const connect = mongoose.connection;
app.use(express.json());
try {
    connect.on("open", () => {
        console.log('connected');
    });
} catch (error) {
    console.log("Error: " + error);
}


// Path creation

const appShopRouter = require('./router/shopRouter');
app.use('/appShop', appShopRouter);

const appCategoryRouter = require('./router/categoryRouter');
app.use('/appCategory', appCategoryRouter);

const appItemRouter = require('./router/itemRouter');
app.use('/appItem', appItemRouter);

const appListRouter = require('./router/listRouter');
const bodyParser = require("body-parser");
app.use('/appList', appListRouter);

app.get("/", (req, res) => {
    res.send("Hello World");
})


app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
})
