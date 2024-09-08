const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const customerSchema = new Schema({
    customerId: String,
    name: {
        type: String,
        required: true,
        trim: true,
    },
    mobile: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        lowercase: true,
    },
    address: {
        type: String,
        required: true,
        trim: true,
    },
    reference: {
        type: String,
        trim: true,
    },
    status: {
        type: String,
        enum: ["Active", "Reject"],
        default: "Active",
    },
    duesLimit: { type: Number, default: 0 },
    totalDues: { type: Number, default: 0 },
    user: { type: Schema.Types.ObjectId, ref: "User" },
    registeredAt: { type: Date, default: Date.now },
});

const Customer = mongoose.model("Customer", customerSchema);
module.exports = Customer;