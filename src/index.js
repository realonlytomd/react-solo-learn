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
// counter function show
// let counter = 0;
// function show() {
//   const el = <p>{counter}</p>;
//   counter++;
//   root.render(
//     <React.StrictMode>
//       <h1>Hello, React!</h1>
//       {el}
//    </React.StrictMode>
//   );
// }

//setInterval(show, 1000);
function Hello() {
  return <h1>Hello world.</h1>;
}
const el = <Hello />
root.render(
  <React.StrictMode>
    {el}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
