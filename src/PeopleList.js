import React from 'react';
import './index.css';

function PeopleList(props) {
    const arr = props.data;
    console.log("arr: ", arr);
    const listItems = arr.map((val, index) =>
        <div key={index}>
        <dt>{val.name}</dt>
        <dd>{val.age}</dd>
        </div>
     );
     console.log("listItems: ", listItems);
     return <dl className="centerright">{listItems}</dl>;
}


export default PeopleList;