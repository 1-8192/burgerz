import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BurgerContainer from './components/BurgerContainer'
import BurgerDisplay from './components/BurgerDisplay'

class App extends Component {
  state = ({
    burgers: [],
    displayBurger: {},
    filter: 'all'
  })

  componentDidMount() {
    fetch("http://localhost:3001/burgers")
    .then(response => response.json())
    .then(burgerData => {
      this.setState({
        burgers: burgerData
      })
    })
  }

  handleClick = (burgerInfo) => {
    this.setState({
      displayBurger: burgerInfo
    })
  }

  handleFilter = (event) => {
    event.persist()
    fetch("http://localhost:3001/burgers")
    .then(response => response.json())
    .then(burgerData => {
      if (event.target.value === 'All') {
        this.setState({
          burgers: burgerData
        })
      } else {
        let filterArray = burgerData.filter(burger => {return burger.category === event.target.value})
        this.setState({
          burgers: filterArray
        })
      }
    })
  }

  handleCategoryChange = (categoryBurger) => {
    let newCategory = ""
    if (categoryBurger.category === 'Bougie') {
      newCategory = 'Relatable'
    } else {
      newCategory = 'Bougie'
    }

    let newArray = this.state.burgers.map(burger => {
      if (burger.id === categoryBurger.id) {
        return {...burger, category: newCategory}
      } else {
        return burger
      }
    })

    this.setState({
      burgers: newArray,
      displayBurger: newArray.find(burger => {return burger.id === categoryBurger.id})
    })

    fetch(`http://localhost:3001/burgers/${categoryBurger.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'category': newCategory
      })
    })
    }


    handleDeleteButton = (deletedBurger) => {
      let newArray = this.state.burgers.filter(burger => {return burger.id != deletedBurger.id})
      this.setState({
        burgers: newArray
      })
    }

  render() {
    return (
      <div id="App">
        <BurgerContainer handleDeleteButton={this.handleDeleteButton} type={this.state.filter} handleFilter={this.handleFilter} handleClick={this.handleClick} burgers={this.state.burgers}/>
        <BurgerDisplay handleCategoryChange={this.handleCategoryChange} burger={this.state.displayBurger}/>
      </div>
    );
  }
}

export default App;
