const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/route");
const cors = require("cors")

const dotenv = require("dotenv");
dotenv.config();

const app = express();

app.use(express.json());

cors({
  origin: "*",
});

app.use(routes);

const PORT = process.env.PORT || 8000;
mongoose.connect(process.env.MONGO_URI, () => {
  console.log("Mongodb connected");
});

app.listen(PORT, () => {
  console.log(`server started at ${PORT}`);
});
