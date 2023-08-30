import React, { useState } from 'react';
import './index.css';

function AddPersonForm(props) {
    const [person, setPerson] = useState("");
    const [old, setAge] = useState("");
  
    function handleChange(e) {
      setPerson(e.target.value);
    }
  
    function handleChangeAge(e) {
      setAge(e.target.value);
    }
    
    function handleSubmit(e) {
      if(person !== '') {
        props.handleSubmit(person, old);
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
          placeholder="Add their age"
          onChange={handleChangeAge}
          value={old} />
        <button type="submit">Add</button>
      </form>
    );
  }

  export default AddPersonForm;