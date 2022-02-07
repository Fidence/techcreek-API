const express = require("express");

const Students = require("../model/student");
const routes = express.Router();

routes.get("/", (req, res) => {
  res.json({ name: "confidence" });
});

routes.post("/register", async(req, res) => {
  const { firstName, lastName, email, address, phoneNumber } = req.body;
  const newStudent = await new Students({
    firstName,
    lastName,
    email,
    address,
    phoneNumber,
  });
  newStudent.save();
  res.json(newStudent);
});

module.exports = routes;
