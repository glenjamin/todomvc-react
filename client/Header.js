var React = require('react');

var Header = React.createClass({
  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus />
      </header>
    );
  }
});

module.exports = Header;
