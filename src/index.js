import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import UserProvider from './Components/UserContext'



ReactDOM.render(
  
    <UserProvider>
    <App />
    </UserProvider>,

  document.getElementById('root')
);

reportWebVitals();
