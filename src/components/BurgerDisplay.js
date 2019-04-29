import React, { Component } from 'react';

const BurgerDisplay = (props) => {
  return (
    <div className="BurgerDisplay">
      <img src={props.burger.imgURL}/>
      <br/>
      <h1>{props.burger.name}</h1>
      <br/>
        <select id={props.burger.id} value={props.burger.category} onChange={() => props.handleCategoryChange(props.burger)}>
        <option value="Relatable">Relatable</option>
        <option value="Bougie">Bougie</option></select>
    </div>
  )
}

export default BurgerDisplay
