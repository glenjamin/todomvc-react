var React = require('react');

var App = React.createClass({
  render() {
    return (
      <section className="main">
        <input className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          <li className="completed">
            <div className="view">
              <input className="toggle" type="checkbox" checked />
              <label>Taste JavaScript</label>
              <button className="destroy"></button>
            </div>
            <input className="edit" value="Create a TodoMVC template" />
          </li>
          <li>
            <div className="view">
              <input className="toggle" type="checkbox" />
              <label>Buy a unicorn</label>
              <button className="destroy" />
            </div>
            <input className="edit" value="Rule the web" />
          </li>
        </ul>
      </section>
    );
  }
});

module.exports = App;
