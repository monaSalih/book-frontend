import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
ReactDOM.render(
  <React.StrictMode>
  <Auth0Provider

    domain={process.env.REACT_APP_USER_BOMAIN}
    clientId={process.env.REACT_APP_CLINT_ID}
    redirectUri={window.location.origin}
>
  <App />
  
</Auth0Provider>,
</React.StrictMode>,
document.getElementById('root')
);
