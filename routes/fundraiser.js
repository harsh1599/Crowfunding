const express = require("express");

const router = express.Router({ mergeParams: true });

router.get("/new", (req, res) => {
    res.render("fundraiser/new");
});
router.get("/:id",(req, res)=>{
    res.render("fundraiser/show");
});
router.post("/new", (req,res)=>{
    
});
module.exports = router;