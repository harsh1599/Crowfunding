const express = require("express");
const router = express.Router({mergeParams: true});

router.get("/home", (req, res) => {
    res.render("investor/home");
});

router.get("/edit", (req, res) => {
    res.render("investor/edit");
});

router.post("/", (req, res) => {
    
});

module.exports = router;