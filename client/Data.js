var state = {
  filter: {
    name: '',
    fn: () => true
  },
  todos: [
    { id: 1, title: "Learn React", completed: true },
    { id: 2, title: "Experience Hot Reloading", completed: false },
    { id: 3, title: "Build TodoMVC", completed: false },
    { id: 4, title: "Connect to Server", completed: false }
  ]
};

var actions = exports.actions = {};

actions.setFilter = function(name) {
  var filter = { name };
  switch(name) {
    case '': filter.fn = () => true; break;
    case 'active': filter.fn = todo => !todo.completed; break;
    case 'completed': filter.fn = todo => todo.completed; break;
  }
  state.filter = filter;
  update();
};

actions.addTodo = function(title) {
  var maxId = Math.max.apply(Math, state.todos.map(todo => todo.id));
  state.todos.push({ id: maxId + 1, title, completed: false });
  update();
};

actions.toggleTodo = function(index) {
  state.todos[index].completed = !state.todos[index].completed;
  update();
};

actions.editTodo = function(index, title) {
  state.todos[index].title = title;
  update();
};

actions.removeTodo = function(index) {
  state.todos.splice(index, 1);
  update();
};

actions.clearCompletedTodos = function() {
  state.todos = state.todos.filter(todo => !todo.completed);
  update();
};

actions.setAllTodos = function(completed) {
  state.todos.forEach(todo => todo.completed = completed);
  update();
};

var subscriptions = [];

function update() {
  subscriptions.forEach(fn => fn(state));
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
    Object.keys(actions).forEach(k => {
      module.hot.data.actions[k] = actions[k];
    });
    update();
  }
  module.hot.accept();
  module.hot.dispose(data => {
    data.state = state;
    data.subscriptions = subscriptions;
    data.actions = actions;
  });
}
