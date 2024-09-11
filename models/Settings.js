const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const settingsSchema = new Schema({
  siteTitle: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  emailChecked: {
    type: Boolean,
    default: false,
  },
  smsChecked: {
    type: Boolean,
    default: false,
  },
  token: String,
});

const Settings = mongoose.model("Settings", settingsSchema);

module.exports = Settings;