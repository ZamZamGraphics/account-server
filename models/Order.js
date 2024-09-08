const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    customer: { type: Schema.Types.ObjectId, ref: "Customer" },
    orderItems:[
        {
            id: String,
            name: String,
            description: String,
            type: String,
            quantity: String,
            rate: Number,
            price: Number,
        }
    ],
    amount: Number,
    discount: Number,
    payableAmount: Number,
    payment: Number,
    due: Number,
    paymentStatus: {
        type: String,
        required: true,
        enum: ["Unpaid", "Advanced", "Full Paid", "Payment"],
    },
    user: { type: Schema.Types.ObjectId, ref: "User" },
    issuDate: { type: Date, default: Date.now },
    deliveryDate: { type: Date, default: Date.now },
});

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;