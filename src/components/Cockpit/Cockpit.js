import React from 'react';

const cockpit = (props)=>{
  return(
<div>
  <h1>Hello React developers!</h1>
  <p>It's ALIVE!!!</p>
  <button style={props.style} onClick={props.changed}>
    Show People
  </button>
</div>

  )
}

export default cockpit
