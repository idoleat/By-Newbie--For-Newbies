function Test(){
    // default events.
    this.event_listeners = {
        'func1' : (listener) => {
            console.log("func1 event default function call");
        },
        'func2' : (listener) => {
            console.log("func2 event default function call");
        }
    }
}

Test.prototype.on = function(event_name, listener){
    this.event_listeners[event_name] = listener;
}

Test.prototype.emitEventListener = function(event_name, ...params) {
  return this.event_listeners[event_name].apply(null, params);
}

const test = new Test();

test.on("func1", () => {
    console.log("emitted by func1 event")
});

test.emitEventListener("func1");
test.emitEventListener("func2");

test.on("func1", (date) => {
    console.log("emitted by func1 event. Today is " + date + ".");
});

test.emitEventListener("func1", "2020-03-17"); //parameteres is filled by emitter.

// other ways to emit events
test.event_listeners['func1']();
test.event_listeners['func1']('2020-03-17');
