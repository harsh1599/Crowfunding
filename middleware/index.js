const middleware = {};

middleware.isStudentLoggedIn = (req, res, next) => {
    if (req.isAuthenticated() && req.user.usertype === "STUDENT") return next();
    res.redirect('/student/login');
};

middleware.isInvestorLoggedIn = (req, res, next) => {
    if (req.isAuthenticated() && req.user.usertype === "INVESTOR") return next();
    res.redirect('/investor/login');
};

module.exports = middleware;