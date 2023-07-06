class EventEmitter {
  subscribitions = new Map()

  subscribe(eventName, cb) {
    if(!this.subscribitions.has(eventName)) {
      this.subscribitions.set(eventName, new Set())
    }
    const events = this.subscribitions.get(eventName)
    const cbObj = { cb }
    events.add(cbObj)

    return {
      unsubscribe: () => {
        events.delete(cbObj)
        if(!events.size) {
          this.subscribitions.delete(eventName)
        }
      }
    }
  }

  emit(eventName, ...args) {
    const events = this.subscribitions.get(eventName)
    if(events) {
      events.forEach((event) => {
        event.cb.apply(this,...args)
      })
    }
  }
}

const emitter = new EventEmitter();

function callback1() {
  console.log('Callback 1');
}

function callback2() {
  console.log('Callback 2');
}

const callback3 = () => {
  console.log('Callback 3');
};

emitter.subscribe('event1', callback1);
emitter.subscribe('event1', callback2);
let sub = emitter.subscribe('event2', callback3);

emitter.emit('event1'); 
emitter.emit('event2')

sub.unsubscribe()

emitter.emit('event1'); 
emitter.emit('event2')
