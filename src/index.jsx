import React from 'react';
import ReactDOM from 'react-dom';
import { AuthProvider } from './context/userContext';
import CartContextProvider from './context/CartItemContext/cartContext';
import App from './App';
import './style/presett.scss';

ReactDOM.render(
  <AuthProvider>
    <CartContextProvider>
      <App />
    </CartContextProvider>
  </AuthProvider>,
  document.getElementById('root')
);
