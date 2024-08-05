const addNumbers = (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let sum = number1 + number2;
  console.log(sum);
  res.status(200);
  res.json({ result: sum });
};

const minusNumbers = (req, res) => {
  let number3 = parseInt(req.query.num3);
  let number4 = parseInt(req.query.num4);
  let minusSum = number3 - number4;
  console.log(minusSum);
  res.status(200);
  res.json({ result: minusSum });
};

const multiplyNumbers = (req, res) => {
  let number5 = parseInt(req.query.num5);
  let number6 = parseInt(req.query.num6);
  let multiplySum = number5 - number6;
  console.log(multiplySum);
  res.status(200);
  res.json({ result: multiplySum });
};

const divideNumbers = (req, res) => {
  let number7 = parseInt(req.query.num7);
  let number8 = parseInt(req.query.num8);
  let divideSum = number7 - number8;
  console.log(divideSum);
  res.status(200);
  res.json({ result: divideSum });
};

module.exports = {
  addNumbers,
  minusNumbers,
  multiplyNumbers,
  divideNumbers,
};
