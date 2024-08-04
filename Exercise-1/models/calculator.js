import logger from "./logger.js";

class Calculator {
    constructor() {
        this.id = Math.random();
    }
    // #log = (value) => {
    //     console.log(`[Calculator :${this.id}]:${value}`);
    // };
    #log = (value) => {
        const log = new logger(value);
        return log;
    };
    add(num1, num2) {
        const value = num1 + num2;
        this.#log(value);
        return value;
    }

    subtract(num1, num2) {
        const value = num1 - num2;
        this.#log(value);
        return value;
    }
    divide(num1, num2) {
        const value = num1 / num2;
        this.#log(value);
        return value;
    }
    multiply(num1, num2) {
        const value = num1 * num2;
        this.#log(value);
        return value;
    }
}

export default Calculator;
