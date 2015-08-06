var React = require('react');

var Router = require('director').Router;

var App = require('./App');

var Data = require('./Data');

new Router({
  '/': () => Data.actions.setFilter(''),
  '/active': () => Data.actions.setFilter('active'),
  '/completed': () => Data.actions.setFilter('completed')
}).init();

Data.listen(function(state) {
  console.log("Rendering <App>", state);
  React.render(
    <App {...state} actions={Data.actions} />,
    document.getElementById('root')
  );
});
