import React, { Component } from 'react';
import './App.css';
import Person from '../components/Persons/Person/Person';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'

export const AuthContext = React.createContext(false)



class App extends Component {
  state = {
    persons: [
      { id: 'asfd', name: 'Dimitri', age: 22 },
      { id: 'fras', name: 'Max', age: 29 },
      { id: 'assd', name: 'Stephanie', age: 26 }
    ],
    showPersons: false,
    toggleClicked:0,
    authenticated:false
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
    this.setState((prevState,props)=>{
      return {

        showPersons: !doesShow,
        toggleClicked:prevState.toggleClicked+1
      }
    });
  };
  loginHandler = ()=>{
    this.setState({authenticated:!this.state.authenticated})
  }



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
      persons = <Persons
                  persons ={this.state.persons}
                  clicked={this.deletePersonHandler}
                  changed={this.nameChangedHandler}/>


      style.backgroundColor = '#FA113D'

    }



    return (
      <div className="App">
        <Cockpit
          login ={this.loginHandler}
          style={this.style}
          changed={this.togglePersonsHandler}
          />
        <AuthContext.Provider value ={this.state.authenticated}>
        {persons}
        </AuthContext.Provider>
      </div>
    );
  }
}



export default App;
