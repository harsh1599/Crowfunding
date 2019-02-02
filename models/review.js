const mongoose = require("mongoose");
const reviewSchema = new mongoose.Schema({
    text:String,
    likes:Number,
    author_i:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Investor"
        }
    ],
    author_s:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Student"
        }
    ],
    created:{
        type:Date,
        default:Date.now
    },
    fund:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"FundRaiser"
    }
})
module.exports = mongoose.model("Reviews", reviewSchema);