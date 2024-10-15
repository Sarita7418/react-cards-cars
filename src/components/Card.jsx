import React from 'react'
import Car from './Car';
import Button from './Button';
import "./Card.css";

const Card = (props) => {
  const card=props.card;
  return (
    <section className={`card ${card.theme}`}>
        <Car type={card.car} avatar={card.avatar}/>
        <p>
            {card.details}
        </p>
        <Button/>
    </section>
  );
};

export default Card