var React = require('react');

var TodoItem = React.createClass({
  render() {
    var { todo: {completed, text} } = this.props;
    return (
      <li className={completed ? "completed" : ""}>
        <div className="view">
          <input className="toggle" type="checkbox" checked={completed} />
          <label>{text}</label>
          <button className="destroy"></button>
        </div>
        <input className="edit" value={text} />
      </li>
    );
  }
});

module.exports = TodoItem;
