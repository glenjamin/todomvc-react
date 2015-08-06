var React = require('react');

var Header = require('./Header');
var Main = require('./Main');
var Footer = require('./Footer');

var App = React.createClass({
  render() {
    var { todos, actions } = this.props;
    return (
      <section className="todoapp">
        <Header addTodo={actions.addTodo} />
        <Main
          todos={todos}
          toggleTodo={actions.toggleTodo}
        />
        <Footer completed={0} total={todos.length} />
      </section>
    );
  }
});

module.exports = App;
