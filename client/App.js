var React = require('react');

var Header = require('./Header');
var Main = require('./Main');
var Footer = require('./Footer');

var App = React.createClass({
  render() {
    return (
      <section className="todoapp">
        <Header />
        <Main />
        <Footer />
      </section>
    );
  }
});

module.exports = App;
