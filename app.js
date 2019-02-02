// importing modules
const express = require("express");

// setting up the app
const app = express();
app.set("view engine","ejs");

// adding body parser middleware
app.use(express.urlencoded({ extended: true }));

// routes
app.get("/", (req, res) => res.send("Started"));
app.get("/investor/home", (req,res)=> res.render("investor/home"));
// app.use("/", require("./routes/index"));
app.use("/student", require("./routes/students"));
app.use("/investor", require("./routes/investors"));
app.use("/fundraiser", require("./routes/fundraiser"));

// starting the server
app.listen(process.env.PORT, process.env.IP);