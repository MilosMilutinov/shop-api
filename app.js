const express = require("express");
const mongoose = require("mongoose");
const app = express();

var url =
  "mongodb://127.0.0.1:27017";

// Get the default connection

var db = mongoose.connection;

// Bind connection to error event

db.on("error", console.error.bind(console, "MongoDB connection error"));

// Our default port
const port = 2000;

mongoose.connect(url, { useNewUrlParser: true });
const connect = mongoose.connection;
app.use(express.json());
try {
  connect.on("open", () => {
    console.log("Successfully connected");
  });
} catch (error) {
  console.log("Error: " + error);
}

// Enable CORS

app.use(function(req, res,next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    next();
})

// Routes

const appShopRouter = require("./src/router/shopRouter");
app.use("/appShop", appShopRouter);

const appCategoryRouter = require("./src/router/categoryRouter");
app.use("/appCategory", appCategoryRouter);

const appItemRouter = require("./src/router/itemRouter");
app.use("/appItem", appItemRouter);

const appListRouter = require("./src/router/listRouter");
app.use("/appList", appListRouter);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
