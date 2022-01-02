
const Cart = ({showCart, products}) => {
    return (
        <div className="cart" style={{left: showCart?"0":"-200px"}}>
            {
products.map(item=>{
    if(item.inCart){
    return <h1>{item.title}</h1>}
})
            }
        </div>
    )
}

export default Cart
