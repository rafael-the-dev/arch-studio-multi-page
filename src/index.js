import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/reset.css';
import './assets/css/base.css';
import App from './pages/App';
import 'aos/dist/aos.css';//../../../node_modules/

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
