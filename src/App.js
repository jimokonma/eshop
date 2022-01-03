import {useState} from 'react'
import Cards from './components/Cards';
import Cart from './components/Cart';

function App() {
const [products, setProducts] = useState([
{
  id: 1,
  title: "Product 1",
  dec: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud',
  img: './images/1.png',
  price: 499,
  inCart: false,
},
{
  id: 2,
  title: "Product 2",
  dec: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud',
  img: './images/2.png',
  price: 499,
  inCart: false,
},
{
  id: 3,
  title: "Product 3",
  dec: 'ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud',
  img: './images/3.png',
  price: 909,
  inCart: false,
},
{
  id: 4,
  title: "Product 4",
  dec: 'Lorem dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud',
  img: './images/4.png',
  price: 559,
  inCart: false,
},
{
  id: 5,
  title: "Product 5",
  dec: 'Lorem dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud',
  img: './images/5.png',
  price: 499,
  inCart: false,
},
{
  id: 6,
  title: "Product 6",
  dec: 'Lorem dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud',
  img: './images/6.png',
  price: 499,
  inCart: false,
},
{
  id: 7,
  title: "Product 7",
  dec: 'Lorem dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud',
  img: './images/7.png',
  price: 909,
  inCart: false,
}
])

const [dp, setDp] = useState(0)
const [showCart, setShowCart] = useState(false)
const [ cart, setCart]= useState([])

const addToCart= (id)=>{
  setProducts(products.map(item=>{
    return item.id === id? {...item, inCart: !item.inCart}:item
  }))
 
console.log(cart);
}
  return (
    <div className="App">
      <div className="hero">
        <nav>
          <button  onClick={()=>setShowCart(!showCart)}>{showCart?"x":"cart"}</button>
          <Cart showCart={showCart} products={products} addToCart={addToCart}/>
        
        </nav>
        
       
      <div className="container">
        <div className="heroText">
          <h1>{products[dp].title}</h1>
          <p>
          {products[dp].dec}{" "}
          </p>
          <h1>${products[dp].price} <button onClick={()=>addToCart(products[dp].id)}>{products[dp].inCart?'-':'+'}</button></h1>
          
        </div>
        <div className="heroImage">
          <img src={products[dp].img} alt={products[dp].title} />
        </div>        
      </div>
      <div className="heroBtns">
          <button className={` btn ${dp===0?"btnActive":" "}`} onClick={()=>setDp(0)}></button>
          <button className={` btn ${dp===1?"btnActive":" "}`} onClick={()=>setDp(1)}></button>
          <button className={` btn ${dp===2?"btnActive":" "}`} onClick={()=>setDp(2)}></button>
        </div>
      <Cards cardProduct={products} addToCart={addToCart}/>
      </div>
    </div>
  );
}

export default App;
