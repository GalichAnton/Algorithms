const square = document.querySelector('#square');
function move(i) {
  square.style.left =  i + 'px';
}

// for(let i = 0; i < 1000; i++){
// 		move(i)
// }

// for(let i = 0; i < 1000; i++){
//   setTimeout(()=>move(i), 1000/60 *i)
// }

function animate(i) {
  square.style.left =  i + 'px';
  if(i < 1000) {
    requestAnimationFrame(() => animate(i + 1));
  }
}
animate(0);