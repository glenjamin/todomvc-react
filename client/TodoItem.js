var React = require('react');

var TodoItem = React.createClass({
  getInitialState() {
    return { value: this.props.todo.title, editing: false };
  },
  save(event) {
    event.preventDefault();
    var title = this.state.value.trim();
    if (title) {
      this.props.edit(title);
      this.setState({ editing: false });
    } else {
      this.props.remove();
    }
  },
  render() {
    var { todo: {completed, title}, toggle, remove } = this.props;
    var { editing, value } = this.state;
    var classNames = [
      completed ? "completed" : "",
      editing ? "editing" : ""
    ];
    return (
      <li className={classNames.join(' ')}>
        <div className="view">
          <input
            className="toggle" type="checkbox"
            checked={completed} onChange={toggle}
          />
          <label onDoubleClick={() => this.setState({editing: true})}>
            {title}
          </label>
          <button className="destroy" onClick={remove} />
        </div>
        {editing &&
          <form action="" onSubmit={this.save}>
            <input className="edit" autoFocus
              value={value}
              onBlur={this.save}
              onChange={e => this.setState({value: e.target.value})}
            />
          </form>}
      </li>
    );
  }
});

module.exports = TodoItem;
