const mongoose = require("mongoose");
//investor Schema
const investorSchema = new mongoose.Schema({
    username : String,
    email_id : String,
    password : String,
    image    : String,
    description: String,
    funds    : [{
        type: mongoose.Schema.Types.ObjectId,
        ref : "FundRaiser"
    }],
    created  :{
        type: Date, 
        default:Date.now
    }
});

module.exports = mongoose.model("Investor", investorSchema);