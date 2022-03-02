const mongoose = require("mongoose");

const signinsschema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
}, { timestamps: true }
);

const Signins = new mongoose.model("techcreeksign", signinsschema);

module.exports = Signins;
