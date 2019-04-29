import React, { Component } from 'react';

const BurgerItem = (props) => {
  return (
    <div>
      <div className="BurgerItem">
        {props.burger.name}
      </div>
      <div className="BurgerBottomBun">
        <button onClick={() => {props.handleClick(props.burger)}}>Show</button>
        <button onClick={() => {props.handleDeleteButton(props.burger)}}>Delete</button>
      </div>
    </div>
  )
}

export default BurgerItem
