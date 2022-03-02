const mongoose = require("mongoose");

const studentsschema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    middleName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    dateofBirth: {
      type: String,
      required: true,
    },
    education: {
      type: String,
      // required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    stateoforigin: {
      type: String,
      required: true,
    },
    lga: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const Students = new mongoose.model("demos", studentsschema);

module.exports = Students;
