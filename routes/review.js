const express = require("express");
const middleware = require("../middleware"); 
const router = express.Router({ mergeParams:true });
const fundraiser = require("../models/fundraiser");
const review = require("../models/review");

router.get("/new_review", middleware.isStudentLoggedIn ,(req,res) => {
   res.render("review/new",{fundId:req.params.id}); 
});

router.post("/",middleware.isStudentLoggedIn, (req,res)=>{
    const rev = req.body.review;
    fundraiser.findById(req.params.id, (err,fund)=>{
        if(err){
            console.log("Couldn't add review");
            res.redirect("/fundraiser/"+req.params.id);
        }else{
          review.create({text:rev,fund:fund},(err,newReview)=>{
              if(err){
                  res.redirect("/fundraiser/"+req.params.id);
              }else{
                  fund.reviews.push(newReview);
                  fund.save();
                  res.redirect("/fundraiser/"+req.params.id);
              }
          }); 
          res.redirect("/fundraiser/"+req.params.id);  
        }
    })
})

module.exports = router;
