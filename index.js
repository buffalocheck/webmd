//Includes & Global variables
var express = require("express");
var bodyParser = require("body-parser");
var ejsLayouts = require("express-ejs-layouts");
var app = express();

// Set & Use statements
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(ejsLayouts);
app.use(require('morgan')('dev'));

// Define routes
app.get("/", function(req, res) {
    res.render("home");
});

//Controlers
app.use("/diseases", require("./controlers/diseases"));
app.use("/symptoms", require("./controlers/symptoms"));

// Listen
app.listen(3000);
