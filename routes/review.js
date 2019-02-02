const express = require("express");
const middleware = require("../middleware");

const router = express.Router({ mergeParams:true });

const fundraiser = require("../models/fundraiser");
const review = require("../models/review");

router.get("/new_review", middleware.isStudentLoggedIn ,(req,res) => {
   res.render("review/new", { fundId: req.params.id }); 
});
router.post("/", middleware.isStudentLoggedIn, (req,res) => {
    const rev = req.body.review;
    const user = req.user;
    fundraiser.findById(req.params.id, (err,fund) => {
        if(err) {
            console.log("Couldn't add review");
            res.redirect("/fundraiser/" + req.params.id);
        } else {
          review.create({text:rev, email:user.email}, (err,newReview) => {
              if (err) {
                  res.redirect("/fundraiser/" + req.params.id);
              } else {
                  fund.reviews.push(newReview);
                  fund.save();
                  res.redirect("/fundraiser/" + req.params.id);
              }
          }); 
        }
    })
})
router.get("/:reviewId/edit",middleware.checkReviewOwnership,(req,res)=>{
    res.render("review/edit",{fundId:req.params.id, reviewId:req.params.reviewId});
})
router.put("/:reviewId",middleware.checkReviewOwnership,(req,res)=>{
    review.findByIdAndUpdate(req.params.reviewId,{text:req.body.review},(err,updatedReview)=>{
        if(err){
            console.log("Couldn't update review");
        }else{
            res.redirect("/fundraiser/"+req.params.reviewId);
        }
    })
})
router.delete("/:reviewId",middleware.checkReviewOwnership,(req,res)=>{
    fundraiser.findById(req.params.reviewId, (err, fund)=>{
        if(err){
            res.send("Error: "+err);
        } else {
            review.findByIdAndRemove(req.params.id1, err=>{
                if(err){
                    res.send("Error "+err);
                } else {
                    res.redirect("/fundraiser/"+req.params.reviewId);
                }
            });
        }
    });
});
module.exports = router;
