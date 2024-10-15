import React from "react";
import "./Car.css"

const Car = ({ type, avatar }) => {
  return (
    <>
      <img src={avatar} alt="" />
      <span>{type}</span>
    </>
  );
};

export default Car;
