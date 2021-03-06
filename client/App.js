var React = require('react');

var Header = require('./Header');
var Main = require('./Main');
var Footer = require('./Footer');

var App = React.createClass({
  render() {
    var { todos, filter, actions } = this.props;
    var completed = todos.filter(todo => todo.completed).length;
    return (
      <section className="todoapp">
        <Header addTodo={actions.addTodo} />
        <Main
          todos={todos} filter={filter.fn}
          setAll={actions.setAllTodos}
          toggleTodo={actions.toggleTodo}
          editTodo={actions.editTodo}
          removeTodo={actions.removeTodo}
        />
        <Footer
          filter={filter.name}
          completed={completed}
          total={todos.length}
          clearCompleted={actions.clearCompletedTodos}
        />
      </section>
    );
  }
});

module.exports = App;
