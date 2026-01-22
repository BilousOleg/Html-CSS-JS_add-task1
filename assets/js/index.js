/**
 * Function gets prefix and returns function that uses prefix and input message to log them using closure
 * @param {string} prefix prefix value
 * @returns
 */
const createLogger = (prefix) => (message) =>
  console.log(`${prefix}: ${message}`);

// Перевірка роботи функції
const authLogger = createLogger('AUTH');
const apiLogger = createLogger('API');

authLogger('User logged in'); // AUTH: User logged in
apiLogger('Request failed'); // API: Request failed
