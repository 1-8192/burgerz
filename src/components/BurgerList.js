import React, { Component } from 'react';
import BurgerItem from './BurgerItem'

const BurgerList = (props) => {
  return (
    <div className="BurgerList">
      {props.burgers.map(singleBurger => {
        return <BurgerItem handleDeleteButton={props.handleDeleteButton} handleClick={props.handleClick} burger={singleBurger} />
      })}
    </div>
  )
}

export default BurgerList
