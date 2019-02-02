const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

//investor Schema
const InvestorSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    image: String,
    description: String,
    funds: [{
        type: mongoose.Schema.Types.ObjectId,
        ref : "Fundraiser"
    }],
    usertype: { type: String, default: "INVESTOR" },
    created: {
        type: Date, 
        default:Date.now
    }
});

InvestorSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("Investor", InvestorSchema);