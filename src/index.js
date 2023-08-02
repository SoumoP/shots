import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

  const root = ReactDOM.createRoot(document.getElementById('root'));
  
  // function transformScroll(event) {
  //   if (!event.deltaY) {
  //     return;
  //   }

  //   event.currentTarget.scrollLeft += event.deltaY + event.deltaX;
  //   event.preventDefault();
  // }

  // var element = document.scrollingElement || document.documentElement;
  // element.addEventListener('wheel', transformScroll);


  
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
