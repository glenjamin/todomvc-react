var React = require('react');

var Footer = React.createClass({
  render() {
    var { total, completed } = this.props;
    if (total === 0) {
      return null;
    }
    var left = total - completed;
    return (
      <footer className="footer">
        <span className="todo-count">
          <strong>{left}</strong>
          {" "}
          item{left === 1 ? "" : "s"} left
        </span>
        <ul className="filters">
          <li>
            <a className="selected" href="#/">All</a>
          </li>
          <li>
            <a href="#/active">Active</a>
          </li>
          <li>
            <a href="#/completed">Completed</a>
          </li>
        </ul>
        <button className="clear-completed">
          Clear completed ({completed})
        </button>
      </footer>
    );
  }
});

module.exports = Footer;
