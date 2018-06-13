import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Persona = styled.div`
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
class Person extends React.Component{

componentDidMount(){

  this.inputElement.focus();
}
  render(){
    return (
      <Persona>
        <p onClick={this.props.click}>
          I am {this.props.name} and I am {this.props.age} years old
        </p>
        <Input
          innerRef={(inp)=>{this.inputElement=inp}}
          type="text"
          onChange={this.props.changed}
          value={this.props.name} />
      </Persona>
    );
  }
}



Person.propTypes ={
  click:PropTypes.func,
  name:PropTypes.string,
  age:PropTypes.number,
  changed:PropTypes.func

}

export default Person;
