const express = require("express");
const {
  addNumbers,
  minusNumbers,
  multiplyNumbers,
  divideNumbers,
} = require("../controller/calculatorController");
const router = express.Router();

router.get("/add", (req, res) => {
  addNumbers(req, res);
});

router.get("/minus", (req, res) => {
  minusNumbers(req, res);
});

router.get("/multiply", (req, res) => {
  multiplyNumbers(req, res);
});
router.get("/divide", (req, res) => {
  divideNumbers(req, res);
});

module.exports = router;
// new route for adding two numbers
// router.get("/add", (req, res) => {
//   console.log(req.query);
//   res.send(req.query);
// });

// router.get("/add", (request, response) => {
//   let number1 = parseInt(request.query.num1);
//   let number2 = parseInt(request.query.num2);
//   let sum = number1 + number2;

//   console.log(sum);
//   response.status(200);
//   response.json({ result: sum });
// });

// router.get("/subtract", (request, response) => {
//   let number3 = parseInt(request.query.num1);
//   let number4 = parseInt(request.query.num2);
//   let difference = number3 - number4;

//   console.log(difference);
//   response.status(200);
//   response.json({ result: difference });
// });

// router.get("/divide", (request, response) => {
//   let number5 = parseInt(request.query.num1);
//   let number6 = parseInt(request.query.num2);
//   let divideSum = number5 / number6;

//   console.log(divideSum);
//   response.status(200);
//   response.json({ result: divideSum });
// });

// router.get("/multiply", (request, response) => {
//   let number7 = parseInt(request.query.num1);
//   let number8 = parseInt(request.query.num2);
//   let multiplySum = number7 * number8;

//   console.log(multiplySum);
//   response.status(200);
//   response.json({ result: multiplySum });
// });
