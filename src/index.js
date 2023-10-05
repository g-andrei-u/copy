import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/index.css';
import App from './App';
import store from './Redux/store';
import { Provider } from 'react-redux';
import AuthProvider from './Context/AuthProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
    <Provider store={store}>
      <App />
    </Provider>
    </AuthProvider>
  </React.StrictMode>
);
