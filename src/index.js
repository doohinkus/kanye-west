import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { worker } from './mocks/browser';

async function display(){
    if (process.env.NODE_ENV === 'development') {
      // const { worker } = require('./mocks/browser');
      // if (window.location.pathname === '/kayne-rest') {
      //   window.location.pathname = '/kayne-rest/';
      //   return;
      // }
      await worker.start({
        serviceWorker: {
          url: '/kayne-rest/mockServiceWorker.js',
        },
      })
    }
    
    console.log("ENV>>>>",process.env.NODE_ENV)
    
    ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      document.getElementById('root')
    );
}

display();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
