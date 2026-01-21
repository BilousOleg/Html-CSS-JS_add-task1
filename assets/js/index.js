/**
 * Function gets initial value (start) and initiates a closure,
 * returning adder function, which uses this function's sum and adds value to it
 * @param {number} start
 * @returns {object} adder function
 */
function createAdder(start) {
  let sum = start;
  return function (value) {
    sum += value;
    return sum;
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
