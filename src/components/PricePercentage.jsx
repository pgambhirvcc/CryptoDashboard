import React from 'react'

const PricePercentage = (props) => {

  const value = props.value;
  const changeClassName = value > 0 ? 'text-white bg-green-800' : 'text-white bg-red-800';

  return (
    <div className={changeClassName}>% {value}</div>
  )
}

export default PricePercentage