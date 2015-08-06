var React = require('react');

var TodoItem = require('./TodoItem');

var Main = React.createClass({
  render() {
    var { todos, toggleTodo, editTodo, removeTodo } = this.props;
    if (todos.length === 0) {
      return null;
    }
    return (
      <section className="main">
        <input className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          {todos.map((todo, i) =>
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
