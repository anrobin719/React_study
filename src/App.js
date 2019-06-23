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
      backgroundColor: "rgb(255, 240, 97)",
      border: "2px solid rgb(255, 240, 97)",
      borderRadius: "20px",
      padding: "6px 12px",
      color: "#8b62d0",
      font: "700 12px Montserrat",
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

      btnStyle.backgroundColor = "rgba(0,0,0,0)";
      btnStyle.color = "rgb(255, 240, 97)";
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("yellow");
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold");
    }


    return (
        <div className="App">
          <h1>Hi, I'm React App!</h1>
          <p className={classes.join(' ')}>this is really working!</p>
          
          <button
          style={btnStyle}
          onClick={this.togglePersonsHanlder}>Switch Name</button>

          {persons}
        </div>
    );
  }
}

export default App;