const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderItemSchema = new Schema({
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
        required: true,
        trim: true,
    },
    quantity: {
        type: String,
        required: true,
        trim: true,
    },
    rate: {
        type: Number,
        required: true,
    },    
});

const OrderItem = mongoose.model("OrderItem", orderItemSchema);
module.exports = OrderItem;