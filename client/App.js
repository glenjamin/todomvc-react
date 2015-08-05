var React = require('react');

var Header = require('./Header');
var Main = require('./Main');
var Footer = require('./Footer');

var App = React.createClass({
  render() {
    var { todos } = this.props;
    return (
      <section className="todoapp">
        <Header />
        <Main todos={todos} />
        <Footer completed={0} total={todos.length} />
      </section>
    );
  }
});

module.exports = App;
