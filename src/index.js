import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Auth0Provider} from "@auth0/auth0-react"

ReactDOM.render(
  <Auth0Provider
  domain="dev-04tqojgk.us.auth0.com"
  clientId="PUBg7czNSnTlyi8mz3JuwXFAyyqoix7J"
  redirectUri={window.location.origin}>
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);

