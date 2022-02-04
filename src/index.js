import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {
  GoogleReCaptchaProvider,
} from 'react-google-recaptcha-v3';

ReactDOM.render(
  <GoogleReCaptchaProvider reCaptchaKey="6Ld8MFMeAAAAAM5baVn_zyph8QC59Skgq5Ce5-VJ">
    <App />
  </GoogleReCaptchaProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
