const Alice = {
  name: 'Alice',
  age: 30,
  track: {
    title: 'frontend',
    score: 30
  }
}

const excludePaths = (obj, paths) => {
  for (let i = 0; i < paths.length; i++) {
    const path = paths[i].split('.');
    let currObj = obj;
    for (let j = 0; j < path.length; j++) {
      if (j === path.length - 1) {
        delete currObj[path[j]];
      } else {
        currObj = currObj[path[j]];
      }
    }
  }
  return obj;
}


console.log(excludePaths(Alice, ['age','track.score']))