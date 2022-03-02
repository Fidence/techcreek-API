const express = require("express");
const mongoose = require("mongoose");
const Students = require("../model/student");
const routes = express.Router();
const cors = require("cors");
const Registers = require("../model/register");
const Signins = require ("../model/signin")


routes.use(express.json());
routes.use(
  cors({
    origin: "*",
  })
);

routes.get("/", (req, res) => {
  res.json({msg:"Welcome to backend" });
});

routes.post("/apply", async (req, res) => {
  const {firstName,middleName,lastName,dateofBirth,education,gender,stateoforigin,lga,email,phoneNumber,address,
   
  } = req.body;

  const newStudent = new Students({
    firstName,
    middleName,
    lastName,
    dateofBirth,
    education,
    gender,
    stateoforigin,
    lga,
    email,
    phoneNumber,
    address,
  });
  await newStudent.save();

   return res.status(200).json({msg: "Apllication successful",});
});

routes.get("/students", async (req, res) =>{
  const students = await Students.find();
   return res.json(students);
 

});

routes.post("/register", async (req, res)=>{
  const {fullName, email, category, password} = req.body;

  const newRegister = new Registers({ fullName, email, category, password });
  await newRegister.save();

  return res.status(200).json({msg:"Registration Successful"})
})

routes.post("/signin", async (req,res)=>{
  const {email,password} = req.body;
  const newSignin = new Signins({email,password });
  await newSignin.save()

  return res.status(200).json({ msg: "Sign Successful" });
})

module.exports = routes;
