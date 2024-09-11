const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const expendSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        trim: true,
    },
    type: {
        type: String,
        trim: true,
    },
    amount: { 
        type: Number, 
        required: true 
    },
    user: { type: Schema.Types.ObjectId, ref: "User" },
    expendDate: { type: Date, default: Date.now },
});

const Expend = mongoose.model("Expend", expendSchema);
module.exports = Expend;