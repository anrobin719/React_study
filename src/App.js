import React, { Component } from 'react';
import './App.css';
import Card from './Card/Card';


class App extends Component {
    state = {
        cards: [
            {id: "c1",name: "Robin", job: "Developer", value: "curious", mission: "contribution to society"},
            {id: "c2",name: "Selly", job: "Actor", value: "enjoy", mission: "be a popstar"},
            {id: "c3",name: "Uptohai", job: "Developer", value: "passion", mission: "make something awsome"},
            {id: "c4",name: "Kale", job: "Musician", value: "happiness", mission: "help each other"},
            {id: "c5",name: "Katoru", job: "Scientist", value: "love", mission: "manage huge company"},
            {id: "c6",name: "Wendy", job: "Marketer", value: "active", mission: "lead startup"}
        ],
        showCard: false
    };

    deleteCardHandler = (cardIndex) => {
      //copy with slice() or ...(spread)
      //const cards = this.state.cards.slice();
      const cards = [...this.state.cards];
      //delete
      cards.splice(cardIndex, 1);
      //re-rendering
      this.setState({cards: cards});
    }

    nameChangedHandler = (event, changedId) => {
      const cardIndex = this.state.cards.findIndex( c => {
        return c.id === changedId;
      });

      const card = {
        ...this.state.cards[cardIndex]
      };
      card.mission = event.target.value;

      const cards = [
        ...this.state.cards
      ];
      cards[cardIndex] = card;

      this.setState({cards: cards});
    }

    toggleHandler = () => {
      const doseShow = this.state.showCard;
      this.setState({showCard: !doseShow});
    }

    render() {
      const btnStyle = {
        backgroundColor: "rgb(33, 84, 224)",
        border: "none",
        borderRadius: "30px",
        width: "90px",
        height: "32px",
        color: "#fff",
        font: "900 12px/32px montserrat",
        cursor: "pointer"
      }

      let cards = null;

      if(this.state.showCard) {
        cards = (
        <div className="cardBox">
          {this.state.cards.map( (card, index) => {
            return <Card 
            click={() => this.deleteCardHandler(index)}
            changed={(event) => this.nameChangedHandler(event, card.id)}
            key={card.id}
            name={card.name}
            job={card.job}
            value={card.value}
            mission={card.mission}
             />
          })}
       </div>
       );
      }
      
      return (
          <div className="App">
            <h1>Manage Your Profile!</h1>
            <p>edit your card :)</p>
            <button style={btnStyle} onClick={this.toggleHandler}>Show List</button>

            {cards}
          </div>
      )
    }
}

export default App;