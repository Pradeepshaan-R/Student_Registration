const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// CONNECT TO MONGOOSE
mongoose.connect(
  "mongodb+srv://Pradeepshaan:Malisha1998@cluster0.h0uxn.mongodb.net/register"
);

// REQUIRE THE ROUTE
app.use("/", require("./routes/studentRoute"));

app.listen(3001, () =>
  console.log("Express Server is Running! On PORT : 3001")
);
