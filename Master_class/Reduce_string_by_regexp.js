// необходимо написать регулярное выражение, которое удаляет из строки любые дублированные символы из 1-го 2х или 3 символов
// которые идут подряд

const myRegExp = /([a-z]{1,3})\1+/g

console.log('abababbbabcabc'.replace(myRegExp, '$1') == 'abbabc');

function zip(str) {
  return str.replace(/([a-z]{1,3})\1+/g, '$1');
}

console.log(zip('abababbbabcabc'));

