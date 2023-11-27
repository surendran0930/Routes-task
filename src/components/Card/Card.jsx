import React from 'react'

const Card = ({img, title, price}) => {
  return (
    <div>
      <image src={img} />
        <h1>{title}</h1>
        <p>{price}</p>
    </div>
  )
}

export default Card