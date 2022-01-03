import CartItem from "./CartItem"

const Cart = ({showCart, products, addToCart}) => {
    return (
        <div className="cart" style={{left: showCart?"0":"-340px"}}>
            {
products.map(item=>{
    return item.inCart && <CartItem key={item.id} item={item}addToCart={addToCart}/>
})
            }
        </div>
    )
}

export default Cart
