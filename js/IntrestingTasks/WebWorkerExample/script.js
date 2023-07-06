
onmessage = event => {
  if (event.data === 'start') {
    // Запускаем вычисления
    const result = calculate();
    
    // Отправляем результат в основной поток
    postMessage(result);
  }
};

// Функция для вычислений
function calculate() {
  let sum = 0;
  for (let i = 0; i < 100000000; i++) {
    sum += i;
  }
  return sum;
}