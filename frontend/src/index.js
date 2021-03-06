import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'; 

// redux store
import {configureStore} from '@reduxjs/toolkit'
import { Provider } from 'react-redux';


import LoginStore from './store/LoginStore';
import SalesStore from './store/SalesStore';
import CustomerStore from './store/CustomerStore';
import Cust_id from './store/Customer_id';
import ProductsStore from './store/ProductsStore';

const store = configureStore({
  reducer :{
    login:LoginStore,
    sales:SalesStore,
    customer:CustomerStore,
    cust_id:Cust_id,
    product:ProductsStore
  }
})

// react-router


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter >
        
          <App />
        
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
