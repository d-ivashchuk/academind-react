import React from 'react';
import styled from 'styled-components'

const Button = styled.button`
padding:5px;
background-color:#BADA55;
border-radius:5px;
color:white;
font-size:15px;
cursor:pointer
:hover{
  color:#555;

}
`
const Cockpit = styled.div`
background-color:#10ADeD;
padding:1em;

`

const cockpit = (props)=>{
  return(
<Cockpit>
  <h1>Hello React developers!</h1>
  <p>It's ALIVE!!!</p>
  <Button style={props.style} onClick={props.changed}>
    Show People
  </Button>
</Cockpit>

  )
}

export default cockpit
