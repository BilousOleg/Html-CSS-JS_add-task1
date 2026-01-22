/**
 * Function gets limit of calls, create counter and returns function that can't be called more than [limit] times using closure
 * @param {number} limit limit of function calls
 * @returns
 */
const createLimiter = (limit) => {
  let callsCount = 0;
  return () => {
    if (callsCount >= limit) {
      // Оператор throw для генерації та викидання "кастомної" помилки
      throw new Error('Exceeded function call limit');
    }
    // Що робить функція не вказано, тому для наглядності вивід в консоль
    console.log('Hello');
    callsCount++;
  };
};

const limited = createLimiter(2);
limited();
limited();
limited();

// В цьому завданні стрілочна функція не дає такого сильного ефекту, як у попередніх,
// тому що окрім повернення (return) виконується ще декілька дій, доводиться все обгортати в фігурні дужки
