import React from 'react'
import Card from './Card'

const Cards = ({cardProduct, addToCart}) => {
    return (
        <div className="cards">
            {
               cardProduct.map(item=>{
                   if(item.id>3)
                  return <Card key={item.id} item={item} addToCart={addToCart}/>
               }) 
                }
          </div>
    )
}

export default Cards
