var React = require('react');

var TodoItem = React.createClass({
  render() {
    var { todo: {completed, title}, toggle } = this.props;
    return (
      <li className={completed ? "completed" : ""}>
        <div className="view">
          <input
            className="toggle" type="checkbox"
            checked={completed} onChange={toggle}
          />
          <label>{title}</label>
          <button className="destroy"></button>
        </div>
        <input className="edit" value={title} />
      </li>
    );
  }
});

module.exports = TodoItem;
