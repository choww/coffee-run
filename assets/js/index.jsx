var React = require('react');
var ReactDOM = require('react-dom');
var Dashboard = require('./dashboard');

var shops = [{name: "Platform 7", neighborhood: "East Vancouver", date: "May 4"},
             {name: "JJ Bean", neighborhood: "East Vancouver", date: "May 9"},
             {name: "Aer Cafe", neighborhood: "East Vancouver", date: "May 9"}]

var getCookie = function(name) {
  var cookieValue;
  if (document.cookie && document.cookie !== '') {
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i].trim();
      if (cookie.substring(0, name.length + 1) === (name + '=')) {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}


if (document.getElementById('container')) {
  ReactDOM.render(<Dashboard shops={shops}
                             getCookie={getCookie} />, 
                  document.getElementById('container'));
}
