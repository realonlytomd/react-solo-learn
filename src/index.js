//import React from 'react';
import React, { useState } from 'react';
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
// function Item(props) {
//   return <div className="item">
//     <b>Name:</b> {props.name} <br />
//     <b>Price:</b> {props.price}
//   </div>;
// } 
// function componet using change handlers with forms
// function AddForm() {
//   const [sum, setSum] = useState(0);
//   const [num, setNum] = useState(0);

//   function handleChange(e) {
//     setNum(e.target.value);
//   }

//   function handleSubmit(e) {
//     setSum(sum + Number(num));
//     e.preventDefault();
//   }

//   return <form onSubmit={handleSubmit}>
//     <input type ="number" value={num} onChange={handleChange} />
//     <input type="submit" value="Add" />
//     <p> Sum is {sum} </p>
//   </form>;
// }
//
function AddPersonForm(props) {
  const [person, setPerson] = useState("");
  const [age, setAge] = useState("");

  function handleChange(e) {
    setPerson(e.target.value);
  }

  function handleChangeAge(e) {
    setAge(e.target.value);
  }
  
  function handleSubmit(e) {
    if(person !== '') {
      props.handleSubmit(person);
      props.handleSubmit(age);
      setPerson('');
      setAge('');
    }
    e.preventDefault();
  }
  return (
    <form className="centerright" onSubmit={handleSubmit}>
      <input 
        type="text"
        placeholder="Add new contact"
        onChange={handleChange}
        value={person} />
      <input
        type="number"
        placeholder="Add age"
        onChange={handleChangeAge}
        value={age} />
      <button type="submit">Add</button>
    </form>
  );
}

function PeopleList(props) {
  const arr = props.data;
  console.log("props.data: ", props.data);
  const listItems = arr.map((val, index) =>
   <li key={index}>{val.name}  {val.age}</li>
   );
   return <ul className="centerright">{listItems}</ul>;
}

function ContactManager(props) {
  const [contacts, setContacts] = useState(props.data);
  
  function addPerson(name) {
    setContacts([...contacts, ...name]);
  }
  
  return (
    <div> 
      <AddPersonForm handleSubmit={addPerson} />
      <PeopleList data={contacts} />
    </div>
  );
}
// function component using useState and change handlers
// function Converter() {
//   const [km, setKm] = useState(0);

//   function handleChange(e) {
//     setKm(e.target.value);
//   }
//   function convert(km) {
//     return (km/1.609).toFixed(2);
//   }

//   return <div>
//     <input type="text" value={km} onChange={handleChange} />
//     <p> {km} km is {convert(km)} miles </p>
//   </div>;
// }

// function component using hooks, or, useSte
// function Counter() {
//   const [counter, setCounter] = useState(0);

//   useEffect(() => {
//     alert("Number of Clicks: " + counter);
//   }, [counter]);

//   function increment() {
//     setCounter(counter+1);
//   }

//   return <div>
//     <h1>{counter}</h1>
//     <button onClick={increment}>
//       Increment
//     </button>
//     </div>;
// }
// class component
// class Counter extends React.Component {
//   state = {
//     counter: 0
//   }
//   increment = () => {
//     this.setState({counter: this.state.counter+1});
//   }
//   // componentDidMount() {
//   //   this.setState({counter: 42});
//   // }
//   componentDidUpdate() {
//     alert("Number of Clicks: " + this.state.counter);
//   }
//   render() {
//     return <div>
//       <p>{this.state.counter}</p>
//       <button onClick={this.increment}
//       >Increment</button>
//       </div>;
//   }
// }
// function App() {
//   return <div>
//     <Hello name="David" />
//     <Hello name="James" />
//     <Hello name="Amy" />
//   </div>;
// }
// function App() {
//   return <div>
//     <Item name="Cheese" price="4.99" />
//     <Item name="Bread" price="1.50" />
//     <Item name="Ice cream" price="24.00" />
//   </div>
// }
const contacts = [{name:"James Smith",
                    age: 44}, 
                    {name: "Thomas Anderson",
                    age: 46}];
const el = <ContactManager data={contacts} />;
root.render(
  <React.StrictMode>
    {el}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
