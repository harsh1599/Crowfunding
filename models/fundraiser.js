const mongoose = require("mongoose");

const FundRaiserSchema = new mongoose.Schema({
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
    investors: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Investor"
    }],
    created: { type: Date, default: Date.now },
    images: Array(String),
    likes: { type: Number, default: 0 },
    reviews: [{
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Review"
        }
    }]
});

module.exports = mongoose.model("FundRaiser", FundRaiserSchema);