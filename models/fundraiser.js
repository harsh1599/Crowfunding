const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const FundraiserSchema = new mongoose.Schema({
    title: String,
    institute: String,
    summary: String,
    goal: Number,
    current: { type: Number, default: 0 },
    student: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Student"
        },
        name: String
    },
    transactions: [{
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Investor" 
        },
        amount: Number
    }],
    created: { type: Date, default: Date.now },
    images: Array(String),
    likes: { type: Number, default: 0 },
    reviews: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Review"
    }]
});

FundraiserSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("FundRaiser", FundraiserSchema);