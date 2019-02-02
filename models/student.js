const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
    username: String,
    email_id: String,
    password: String,
    institute: String,
    image: String,
    description: String,
    funds: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "FundRaiser"
    }],
    created: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Student", StudentSchema);