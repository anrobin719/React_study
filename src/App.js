import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [{name: "robin", age: 300}, {name: "uptohai", age: 301}, {name: "mung", age: 2}],
    otherState: "some other value"
  };

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {name: newName, age: 300},
        {name: "uptohai", age: 301},
        {name: "mung", age: 50}]
    });
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: "robin", age: 300},
        {name: event.target.value, age: 301},
        {name: "mung", age: 2}]
    });
  }

  render() {
    const btnStyle = {
      backgroundColor: "rgb(255, 180, 97)",
      border: "none",
      padding: "5px 10px",
      color: "#fff",
      borderRadius: "5px",
      cursor: "pointer"
    }

    return (
      <div className="App">
        <h1>Hi, I'm React App!</h1>
        <p>this is really working!</p>
        
        <button
        style={btnStyle}
        onClick={this.switchNameHandler.bind(this, "An")}>Switch Name</button>

        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          value={this.state.persons[0].name} />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          changed={this.nameChangedHandler}
          value={this.state.persons[1].name}/>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
          click={this.switchNameHandler.bind(this, "Rob")}
          value={this.state.persons[2].name}>I'm a cat!</Person>
      </div>
    );
  }
}

export default App;