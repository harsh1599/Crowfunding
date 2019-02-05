const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    institute: String,
    image: String,
    description: String,
    funds: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "FundRaiser"
    }],
    likedFunds: Array({
        type: mongoose.Schema.Types.ObjectId,
        ref: "FundRaiser" 
    }),
    usertype: { type: String, default: "STUDENT" },
    created: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Student", StudentSchema);