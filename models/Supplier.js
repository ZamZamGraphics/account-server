const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const supplierSchema = new Schema({
    supplierId: String,
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
    type: {
        type: String,
        trim: true,
    },
    totalDues: { type: Number, default: 0 },
    user: { type: Schema.Types.ObjectId, ref: "User" },
    registeredAt: { type: Date, default: Date.now },
});

const Supplier = mongoose.model("Supplier", supplierSchema);
module.exports = Supplier;