import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserProvider from './Components/UserContext'



ReactDOM.render(
    <UserProvider>
    <App />
    </UserProvider>,
  document.getElementById('root')
);

reportWebVitals();
