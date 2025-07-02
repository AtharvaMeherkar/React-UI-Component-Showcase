// src/components/Card.jsx
import React from "react";

const Card = ({ title, children, className = "", ...props }) => {
  return (
    <div className={`card-container ${className}`} {...props}>
      {title && <h3 className="card-title">{title}</h3>}
      {children}
    </div>
  );
};

export default Card;
