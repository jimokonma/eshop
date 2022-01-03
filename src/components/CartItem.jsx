
const CartItem = ({item, addToCart}) => {
    return (
        <div className='cartItem'>
            <img src={item.img} alt={item.title} />
            <p>{item.title}</p>
            <h5>{item.price}</h5>
            <button onClick={()=>addToCart(item.id)}>x</button>
        </div>
    )
}

export default CartItem
