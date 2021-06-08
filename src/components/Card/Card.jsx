import React from "react";
import './Card.css'

function Card(props) {
    let title= props.strMeal
    let titlePlus = title.slice(0,29)+"..."
  return (
    
    
      <div className="recipe-card">
        <img src={props.strMealThumb} alt="" />
        <div className="card-content">
          <p>{title.length< 30 ? title : titlePlus  }</p>
        </div>
      </div>
    
  );
}

export default Card;
