const mongoose = require("mongoose");
const reviewSchema = new mongoose.Schema({
    text: String,
    likes:{type:Number,default:0},
    email:String
});
module.exports = mongoose.model("Review", reviewSchema);