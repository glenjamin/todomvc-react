var React = require('react');

var Footer = React.createClass({
  render() {
    var { filter, total, completed } = this.props;
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
            <a className={filter === "" && "selected"}
              href="#/">All</a>
          </li>
          <li>
            <a className={filter === "active" && "selected"}
              href="#/active">Active</a>
          </li>
          <li>
            <a className={filter === "completed" && "selected"}
              href="#/completed">Completed</a>
          </li>
        </ul>
        {completed > 0 &&
          <button
            className="clear-completed"
            onClick={this.props.clearCompleted}
          >
            Clear completed ({completed})
          </button>}
      </footer>
    );
  }
});

module.exports = Footer;
