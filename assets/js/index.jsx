var React = require('react');
var ReactDOM = require('react-dom');
var Dashboard = require('./dashboard');

var shops = [{name: "Platform 7", neighborhood: "East Vancouver", date: "May 4"},
             {name: "JJ Bean", neighborhood: "East Vancouver", date: "May 9"},
             {name: "Aer Cafe", neighborhood: "East Vancouver", date: "May 9"}]

if (document.getElementById('container')) {
  ReactDOM.render(<Dashboard shops={shops} />, 
                  document.getElementById('container'));
}
