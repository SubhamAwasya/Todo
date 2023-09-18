import React, { useState } from "react";
import "./card.css";

function Card(prop) {
  return (
    <div className="card-container">
      <h2 className="card-container_card-name">
        {prop.id} - {prop.name}
      </h2>
      <h4 className="card-container_card-email">Email - {prop.email}</h4>
      <h5 className="card-container_card-data">{prop.data}</h5>
      <button className="card-container_delete-btn">Delete</button>
    </div>
  );
}

export default Card;
