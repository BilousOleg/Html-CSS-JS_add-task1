function createLimiter(limit) {
  let callsCount = 0;
  return function () {
    if (callsCount >= limit) {
      // Оператор throw для генерації та викидання "кастомної" помилки
      throw new Error('Exceeded function call limit');
    }
    // Що робить функція не вказано, тому для наглядності вивід в консоль
    console.log('Hello');
    callsCount++;
  };
}

const limited = createLimiter(2);
limited();
limited();
limited();
