import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import store from './redux/store';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
       <App />
  </Provider>

  </React.StrictMode>
);

// // index.js or App.js
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import store from './store'; // Ensure this is the correct path to your store
// import App from './App'; // Your main App component

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
