import React from 'react';
import ReactDOM from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';
import './i18n';

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
serviceWorker.register()