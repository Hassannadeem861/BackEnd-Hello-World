console.log("Hello World Server Side Javascript");

import express from "express";
import * as dotenv from 'dotenv'



const app = express();
dotenv.config()

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/linkedin", (req, res) => {
  console.log(`This is Linkedin new Date()`);
  res.send({
    message: "This is linkedin" + new Date(),
  });
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Example app server on port ${PORT}`);
});
