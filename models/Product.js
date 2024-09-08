const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema(
    {
        invoiceNo: String,
        productItems:[
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
        payment: Number,
        due: Number,
        paymentStatus: {
            type: String,
            required: true,
            enum: ["Unpaid", "Advanced", "Full Paid", "Payment"],
        },
        supplier: { type: Schema.Types.ObjectId, ref: "Supplier" },
        user: { type: Schema.Types.ObjectId, ref: "User" },
        buyDate: { type: Date, default: Date.now },
        issuDate: { type: Date, default: Date.now },
    }
);

const Product = mongoose.model("Product", productSchema);
module.exports = Product;