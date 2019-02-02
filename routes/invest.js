const express = require("express");
const Fundraiser = require("../models/fundraiser");
const Investor = require("../models/investor");
const router = express.Router({ mergeParams: true });
const middleware = require("../middleware");

router.get("/:id", middleware.isInvestorLoggedIn, (req, res) => {
   res.render("invest/new", {
       fundId: req.params.id
   });
});

router.post("/:id", middleware.isInvestorLoggedIn, (req, res) => {
    Fundraiser.findById(req.params.id, (err, foundFundraiser) => {
        if (err) {
            console.log(err);
            res.redirect("back");
        } else {
            foundFundraiser.transactions.push({
               id: req.user._id,
               amount: req.body.investment
            });
            foundFundraiser.current += req.body.investment;
            foundFundraiser.save(err => {
                if (err) {
                    console.log(err);
                    res.redirect("back")
                } else {
                    res.redirect("/fundraiser/" + req.params.id);
                }
            })
        }
    });
});

module.exports = router;