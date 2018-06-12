import React, { Component } from 'react';
import './App.css';
import Radium from 'radium'
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'asfd', name: 'Max', age: 29 },
      { id: 'fras', name: 'Manu', age: 29 },
      { id: 'assd', name: 'Stephanie', age: 26 }
    ],
    showPersons: false
  };
  deletePersonHandler = personIndex => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  };

  render() {
    const style = {
      backgroundColor: '#BADA55',
      color:'white',
      font: 'inherit',
      border: '1px solid #ccc',
      padding: '8px',
      cursor: 'pointer',
      ':hover':{
        backgroundColor:'lightgreen',
        color:'black'

      }
    };
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                key={person.id}
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                changed={event => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
      style.backgroundColor = '#FA113D'
      style[':hover'] ={
        backgroundColor:'lightred',
        color:'black'
      }
    }

    const classes = []
    if(this.state.persons.length<=2){
      classes.push('red')
    }
    if(this.state.persons.length<=1){
      classes.push('bold')
    }


    return (
      <div className="App">
        <h1>Hello React developers!</h1>
        <p className={classes.join(' ')}>It's ALIVE!!!</p>
        <button style={style} onClick={this.togglePersonsHandler}>
          Show Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default Radium(App);
