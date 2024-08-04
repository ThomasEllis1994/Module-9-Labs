import Calculator from "../models/calculator.js";
const myCalc = new Calculator();
console.log(myCalc.log);

const addNumbers = (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let sum = myCalc.add(number1, number2);
    res.status(200).json({ result: sum });
};

const subtract = (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    console.log(number1, number2);
    let subtract = myCalc.subtract(number1, number2);
    console.log(subtract);
    res.status(200).json({ result: subtract });
};

const multiply = (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    console.log(number1, number2);
    let multiply = myCalc.multiply(number1, number2);
    console.log(multiply);
    res.status(200).json({ result: multiply });
};

const divide = (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    console.log(number1, number2);
    let divide = myCalc.divide(number1, number2);
    console.log(divide);
    res.status(200).json({ result: divide });
};

//This was not working. It said in console that it could not read num1
// const addNumbers = (req, res) => {
//     let number1 = parseInt(req.query.num1);
//     let number2 = parseInt(req.query.num2);
//     let sum = number1 + number2;
//     console.log(sum);
//     res.status(200).json({ result: sum });
// };

// const subtract = (req, res) => {
//     let number1 = parseInt(req.query.num1);
//     let number2 = parseInt(req.query.num2);
//     let subtract = number1 - number2;
//     console.log(subtract);
//     res.status(200).json({ result: subtract });
// };

// const multiply = (req, res) => {
//     let number1 = parseInt(req.query.num1);
//     let number2 = parseInt(req.query.num2);
//     let multiply = number1 * number2;
//     console.log(multiply);
//     res.status(200).json({ result: multiply });
// };

// const divide = (req, res) => {
//     let number1 = parseInt(req.query.num1);
//     let number2 = parseInt(req.query.num2);
//     let divide = number1 / number2;
//     console.log(divide);
//     res.status(200).json({ result: divide });
// };

export default {
    addNumbers,
    subtract,
    multiply,
    divide,
};
