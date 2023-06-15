const obj = {
  prefix: 'BFE',
  list: ['1', '2', '3'],
  log() {
    this.list.forEach(function (item) {
      console.log(this.prefix + item);
    });
  },
};

obj.log();

// "undefined1"
// "undefined2"
// "undefined3"