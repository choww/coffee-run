'use strict';

var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');

var Test = React.createClass({
  render: function() {
    return <div className="page">o shit</div>;
  }
});

ReactDOM.render(
  <Test/>,
  document.getElementById('content')
);
