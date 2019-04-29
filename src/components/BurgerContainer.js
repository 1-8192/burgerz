import React, { Component } from 'react';
import BurgerList from './BurgerList'
import BurgerFilter from './BurgerFilter'

const BurgerContainer = (props) => {
    return (
      <div className="BurgerContainer">
        <BurgerFilter type={props.filter} handleFilter={props.handleFilter}/>
        <BurgerList handleDeleteButton={props.handleDeleteButton} handleClick={props.handleClick} burgers={props.burgers}/>
      </div>
    )
  }

export default BurgerContainer
