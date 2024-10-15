import React from 'react'

const Car = ({type,avatar}) => {
  return (
    <div>
        <img src={avatar} alt="" />
        <span>{type}</span>
    </div>
  )
}

export default Car