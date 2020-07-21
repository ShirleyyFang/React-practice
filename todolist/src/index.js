import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
//PWA progressive web aplication
//below helps store the website inside user's browser so that it's visible even no internet 

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

