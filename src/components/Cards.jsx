import React from 'react'
import Card from './Card'

const Cards = ({cardProduct}) => {
    return (
        <div className="cards">
            {
               cardProduct.map(item=>{
                  return <Card key={item.id} item={item} />
               }) 
                }
          </div>
    )
}

export default Cards
