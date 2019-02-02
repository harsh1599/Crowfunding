const express = require("express");
const Fundraiser = require("../models/fundraiser");
const router = express.Router({ mergeParams: true });
const middleware = require("../middleware");

router.get("/new", middleware.isStudentLoggedIn, (req, res) => {
    res.render("fundraiser/new");
});

router.get("/:id",(req, res)=>{
    Fundraiser.findById(req.params.id).populate("reviews").exec((err, fund)=>{
        if(err){
            res.send("Error " + err);
        } else {
            res.render("fundraiser/show",{fund:fund});
        }
    });
});

router.post("/new", (req,res)=>{
    Fundraiser.create({
        title: req.body.title,
        institute: req.body.institute,
        summary: req.body.summary,
        goal: req.body.goal,
        images: req.body.images.split(" ")
    }, (err, fund)=>{
        if(err){
            console.log(err);
        } else {
            res.redirect("/fundraiser/"+fund._id);
        }
    });
});

router.get("/:id/edit",middleware.isStudentLoggedIn, (req,res)=>{
   res.render("fundraiser/edits"); 
});

router.put("/:id",middleware.isStudentLoggedIn, (req,res) => {
    Fundraiser.findByIdAndUpdate(req.params.id,req.body.fundraiser,(err,fund)=>{
      if(err){
            res.redirect("/fundraiser/"+req.params.id);
      }else{
          
           res.redirect("/fundraiser/"+req.params.id); 
      }  
    })
});




router.delete("/:id",middleware.isStudentLoggedIn, (req,res) => {
    Fundraiser.findByIdAndRemove(req.params.id, (err)=>{
        if(err){
            res.redirect("/fundraiser/"+req.params.id);
        } else {
            res.send("The fund has successfully been deleted");
        }
    });
});

router.get("/pagination/:page", (req, res) => {
    Fundraiser.paginate({}, {offset: 4*(Number(req.params.page)-1), limit: 4})
        .then(data => {
            return res.json(data.docs);
        })
        .catch((err) => {return res.json(err);});
});

module.exports = router;