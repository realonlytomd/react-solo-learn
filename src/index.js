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

// function component with props
function Item(props) {
  return <div className="item">
    <b>Name:</b> {props.name} <br />
    <b>Price:</b> {props.price}
  </div>;
}
// class component
// class Hello extends React.Component {
//   render() {
//     return <p>Hello, {this.props.name}!</p>;
//   }
// }
// function App() {
//   return <div>
//     <Hello name="David" />
//     <Hello name="James" />
//     <Hello name="Amy" />
//   </div>;
// }
function App() {
  return <div>
    <Item name="Cheese" price="4.99" />
    <Item name="Bread" price="1.50" />
    <Item name="Ice cream" price="24.00" />
  </div>
}
const el = <App />;
root.render(
  <React.StrictMode>
    {el}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
