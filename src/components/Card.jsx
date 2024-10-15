import React from 'react'
import Car from './Car';

const Card = (props) => {
  const card=props.card;
  return (
    <section>
        <Car type={card.car} avatar={card.avatar}/>
    </section>
  );
};

export default Card