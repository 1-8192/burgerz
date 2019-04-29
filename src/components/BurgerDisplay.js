import React, { Component } from 'react';

const BurgerDisplay = (props) => {
  return (
    <div className="BurgerDisplay">
      <img src={props.burger.imgURL}/>
      <br/>
      <h1>{props.burger.name}</h1>
      <br/>
        {props.burger.category === 'Relatable' ? <select value={props.burger.category} onChange={() => {props.handleCategoryChange(props.burger)}}>
        <option selected="selected" value="Relatable">Relatable</option>
        <option value="Bougie">Bougie</option></select> :
        <select id={props.burger.id} value={props.burger.category} onChange={() => {props.handleCategoryChange(props.burger)}}>
          <option value="Relatable">Relatable</option>
          <option selected="selected" value="Bougie">Bougie</option></select>
        }
    </div>
  )
}

export default BurgerDisplay
