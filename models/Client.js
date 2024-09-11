const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const clientSchema = new Schema({
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
    license: {
        type: String,
        trim: true,
    },
    registeredAt: { type: Date, default: Date.now },
});

const Client = mongoose.model("Client", clientSchema);
module.exports = Client;