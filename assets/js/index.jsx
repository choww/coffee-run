import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './dashboard';
import FormService from './services/forms';

var shops = [{name: "Platform 7", neighborhood: "East Vancouver", date: "May 4"},
             {name: "JJ Bean", neighborhood: "East Vancouver", date: "May 9"},
             {name: "Aer Cafe", neighborhood: "East Vancouver", date: "May 9"}]

  function getCoffeeShops() {
    var cookie = FormService.getCookie
    fetch('/get-coffee-shops')
      .then(function(e) {
        console.log(e);
        return response;
      })
  }

if (document.getElementById('container')) {
  ReactDOM.render(<Dashboard shops={getCoffeeShops}
                             getCookie={FormService.getCookie} />, 
                  document.getElementById('container'));
}
