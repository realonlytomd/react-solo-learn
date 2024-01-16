import React from 'react';
import './index.css';

function PeopleList(props) {
    const arr = props.data;
    console.log("arr: ", arr);
    const listItems = arr.map((val, index) =>
        // <div key={index}>
        // <dt>{val.name}</dt>
        // <dd>{val.age}</dd>
        //</div>  with a <dl> element below instead of ul
        // or
        <li key={index}>{val.name}  {val.age}</li>
     );
     console.log("listItems: ", listItems);
     return <ul className="centerright">{listItems}</ul>;
}


export default PeopleList;