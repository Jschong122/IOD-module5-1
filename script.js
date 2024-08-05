const express = require("express");
const testRoute = require("./routes/myTestRoute"); // get the route up
const calculatorRoutes = require("./routes/calculatorRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();
const port = 3002;

//get the public page up
app.use("/", express.static("public"));

//get the route up
app.use("/route", testRoute);

// get the calculatorRoute set up
app.use("/calculator", calculatorRoutes);

//userRoutes
app.use("/users", userRoutes);

app.listen(port, () => {
  console.log(`Example app listening
at http://localhost:${port}`);
});
