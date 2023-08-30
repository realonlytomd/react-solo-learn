import React from 'react';
import './index.css';

function PeopleList(props) {
    const arr = props.data;
    console.log("arr: ", arr);
    const listItems = arr.map((val, index) =>
     <li key={index}>{val.name}  {val.age}</li>
     );
     return <ul className="centerright">{listItems}</ul>;
}



export default PeopleList;