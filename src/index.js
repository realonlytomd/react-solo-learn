import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <h1>Hello, React!</h1>
//     <App />
//   </React.StrictMode>
// );
let counter = 0;
function show() {
  const el = <p>{counter}</p>;
  counter++;
  root.render(
    <React.StrictMode>
      <h1>Hello, React!</h1>
      {el}
   </React.StrictMode>
  );
}

setInterval(show, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
