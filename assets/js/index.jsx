import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './dashboard';
import FormService from './services/forms';

var shops = [{name: "Platform 7", neighborhood: "East Vancouver", date: "May 4"},
             {name: "JJ Bean", neighborhood: "East Vancouver", date: "May 9"},
             {name: "Aer Cafe", neighborhood: "East Vancouver", date: "May 9"}]

if (document.getElementById('container')) {
  ReactDOM.render(<Dashboard shops={shops}
                             getCookie={FormService.getCookie} />, 
                  document.getElementById('container'));
}
