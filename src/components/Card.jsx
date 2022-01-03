import React from 'react'

const Card = ( {item, addToCart}) => {
    return (
        <div className="card">
        <img src={item.img} alt={item.title} />
    <div className="cardText">
      <p>{item.title}</p>
        <h4>{item.price}</h4>
        {/* <p>{star}</p> */}
        <button onClick={()=>addToCart(item.id)}>{item.inCart?"-":"+"}</button>
      </div>  
      </div>
    )
}

export default Card
