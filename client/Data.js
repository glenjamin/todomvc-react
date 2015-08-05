var state = {
  todos: [
    { text: "Learn React", completed: true },
    { text: "Experience Hot Reloading", completed: false },
    { text: "Build TodoMVC", completed: false },
    { text: "Connect to Server", completed: false }
  ]
};
var subscriptions = [];

function update() {
  console.log("Data updated");
  subscriptions.forEach(fn => fn(state.todos));
}

exports.listen = function(fn) {
  subscriptions.push(fn);
  update();
};

// some magic to make hot reloading work
if (module.hot) {
  if (module.hot.data) {
    state = module.hot.data.state;
    subscriptions = module.hot.data.subscriptions;
    console.log("Hot reload complete, state:", state);
    update();
  }
  module.hot.accept();
  module.hot.dispose(data => {
    data.state = state;
    data.subscriptions = subscriptions;
  });
}
