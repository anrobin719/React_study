import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {id: "asdf1", name: "robin", age: 300},
      {id: "asdf2", name: "uptohai", age: 301},
      {id: "asdf3", name: "mung", age: 2}
    ],
    otherState: "some other value",
    showPersons: false
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

    this.setState({persons: persons});
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }


  togglePersonsHanlder = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const btnStyle = {
      backgroundColor: "rgba(0,0,0,0)",
      border: "2px solid rgb(255, 240, 97)",
      borderRadius: "5px",
      padding: "5px 10px",
      color: "rgb(255, 240, 97)",
      cursor: "pointer"
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person,index) => {
            return <Person
            click={() => this.deletePersonHandler(index)}
            name={person.name}
            age={person.age}
            key={person.id}
            changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm React App!</h1>
        <p>this is really working!</p>
        
        <button
        style={btnStyle}
        onClick={this.togglePersonsHanlder}>Switch Name</button>

        {persons}
      </div>
    );
  }
}

export default App;