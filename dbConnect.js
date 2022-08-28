const mongoose = require("mongoose");

const URL =
  "mongodb+srv://admin:Admin%40123@cluster0.vhpaqtv.mongodb.net/E-Hisaab(POS)?retryWrites=true&w=majority";

mongoose.connect(URL);

let connectionObj = mongoose.connection;

connectionObj.on("connected", () => {
  console.log("Mongo DB Connection Successfull");
});

connectionObj.on("error", () => {
  console.log("Mongo DB Connection Failed");
});
