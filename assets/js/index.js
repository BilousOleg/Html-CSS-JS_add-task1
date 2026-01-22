// Завдання 1

/**
 * Function gets initial value (start) and initiates a closure,
 * returning adder function, which uses this function's sum and adds value to it
 * @param {number} start
 * @returns {object} adder function
 */
function createAdder(start) {
  return function (value) {
    start += value;
    return start;
  };
}

// Приклад використання функції та замикання
const adder = createAdder(10);
console.log(adder(13));
console.log(adder(20));
console.log(adder(100));

const adder2 = createAdder(100);
console.log(adder2(13));
console.log(adder2(100));

// Завдання 2

/*
 * Function gets prefix and returns function that uses prefix and input message to log them using closure
 * @param {string} prefix prefix value
 * @returns
 */
function createLogger(prefix) {
  return function (message) {
    console.log(`${prefix}: ${message}`);
  };
}

// Перевірка роботи функції
const authLogger = createLogger('AUTH');
const apiLogger = createLogger('API');

authLogger('User logged in'); // AUTH: User logged in
apiLogger('Request failed'); // API: Request failed
