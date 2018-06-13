import React from 'react';
import styled from 'styled-components'


const Person = styled.div`
color:grey;
width: 60%;
margin: 16px auto 16px;
border: 1px solid #eee;
box-shadow: 0 2px 3px #ccc;
padding: 16px;
text-align: center;
`
const Input = styled.input`
padding:0.3em;
border-radius:5px;
color:#ccc;
font-size:0.7em;
`
const person = props => {

  return (
    <Person>
      <p onClick={props.click}>
        I am {props.name} and I am {props.age} years old
      </p>
      <Input type="text" onChange={props.changed} value={props.name} />
    </Person>
  );
};

export default person;
