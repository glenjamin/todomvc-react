var React = require('react');

var TodoItem = require('./TodoItem');

var Main = React.createClass({
  render() {
    var {
      todos, filter,
      toggleTodo, editTodo, removeTodo, setAll
    } = this.props;
    if (todos.length === 0) {
      return null;
    }
    var all = todos.every(todo => todo.completed);
    return (
      <section className="main">
        <input
          className="toggle-all" type="checkbox"
          checked={all} onChange={() => setAll(!all)}
        />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          {todos.filter(filter).map((todo, i) =>
            <TodoItem
              key={todo.id} todo={todo}
              edit={(title) => editTodo(i, title)}
              remove={() => removeTodo(i)}
              toggle={() => toggleTodo(i)}
            />
          )}
        </ul>
      </section>
    );
  }
});

module.exports = Main;
