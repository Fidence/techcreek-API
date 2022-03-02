const mongoose = require("mongoose");

const registersschema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },

  },
  { timestamps: true }
);
 
const Registers = new mongoose.model("signindatas", registersschema);

module.exports = Registers;
   

