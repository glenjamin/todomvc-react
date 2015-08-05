var React = require('react');

var TodoItem = require('./TodoItem');

var Main = React.createClass({
  render() {
    var { todos } = this.props;
    if (todos.length === 0) {
      return null;
    }
    return (
      <section className="main">
        <input className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          {todos.map((todo, i) => <TodoItem key={i} todo={todo} />)}
        </ul>
      </section>
    );
  }
});

module.exports = Main;
