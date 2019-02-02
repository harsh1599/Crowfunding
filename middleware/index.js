const Review = require("../models/review");

const middleware = {};

middleware.isStudentLoggedIn = (req, res, next) => {
    if (req.isAuthenticated() && req.user.usertype === "STUDENT") return next();
    res.redirect('/student/login');
};

middleware.isInvestorLoggedIn = (req, res, next) => {
    if (req.isAuthenticated() && req.user.usertype === "INVESTOR") return next();
    res.redirect('/investor/login');
};

middleware.checkReviewOwnership = (req, res, next) => {
    if (req.isAuthenticated()) {
        Review.findById(req.params.reviewId, (err, review) => {
            if (err) return res.redirect('back');
            if (review.email === req.user.email) return next();
            else return res.redirect("back");
        });
    } else return res.redirect("back");
};

module.exports = middleware;