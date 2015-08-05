var state = {
  subscriptions: [],
  todos: [
    { text: "Learn React", completed: true },
    { text: "Experience Hot Reloading", completed: false },
    { text: "Build TodoMVC", completed: false },
    { text: "Connect to Server", completed: false }
  ]
};

function update() {
  console.log("Data updated");
  state.subscriptions.forEach(fn => fn(state.todos));
}

exports.listen = function(fn) {
  state.subscriptions.push(fn);
  update();
};

// some magic to make hot reloading work
if (module.hot) {
  if (module.hot.data) {
    state = module.hot.data.state;
    console.log("Hot reload complete, state:", state);
  }
  module.hot.accept();
  module.hot.dispose(data => {
    data.state = state;
  });
}
