import React from 'react'

const Card = ( {item}) => {
    return (
        <div className="card">
        <img src={item.img} alt={item.title} />
    <div className="cardText">
      <p>{item.title}</p>
        <h4>{item.price}</h4>
        {/* <p>{star}</p> */}
      </div>  
      </div>
    )
}

export default Card
