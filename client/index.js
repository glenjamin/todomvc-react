var React = require('react');

var App = require('./App');

var Data = require('./Data');

Data.listen(function(todos) {
  React.render(
    <App todos={todos} />,
    document.getElementById('root')
  );
});
