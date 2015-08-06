var state = {
  todos: [
    { title: "Learn React", completed: true },
    { title: "Experience Hot Reloading", completed: false },
    { title: "Build TodoMVC", completed: false },
    { title: "Connect to Server", completed: false }
  ]
};

var actions = exports.actions = {};

actions.addTodo = function(title) {
  state.todos.push({ title, completed: false });
  update();
};

actions.toggleTodo = function(index) {
  state.todos[index].completed = !state.todos[index].completed;
  update();
};

var subscriptions = [];

function update() {
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
    update();
  }
  module.hot.accept();
  module.hot.dispose(data => {
    data.state = state;
    data.subscriptions = subscriptions;
  });
}
