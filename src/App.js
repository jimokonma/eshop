import {useState} from 'react'
import Cards from './components/Cards';
import Cart from './components/Cart';

function App() {
const [products, setProducts] = useState([
{
  id: 1,
  title: "Pink Unisex",
  dec: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud',
  img: './images/heroShoe1.png',
  price: 499,
  inCart: false,
},
{
  id: 2,
  title: "Nike",
  dec: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud',
  img: './images/heroShoe2.png',
  price: 499,
  inCart: false,
},
{
  id: 3,
  title: "Pink Nike",
  dec: 'ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud',
  img: './images/heroShoe3.png',
  price: 909,
  inCart: false,
},
{
  id: 4,
  title: "Pink",
  dec: 'Lorem dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud',
  img: './images/heroShoe1.png',
  price: 559,
  inCart: false,
},
{
  id: 5,
  title: "Pink",
  dec: 'Lorem dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud',
  img: './images/p1.png',
  price: 499,
  inCart: false,
},
{
  id: 6,
  title: "p2",
  dec: 'Lorem dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud',
  img: './images/p2.png',
  price: 499,
  inCart: false,
},
{
  id: 7,
  title: "Nike",
  dec: 'Lorem dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud',
  img: './images/p3.png',
  price: 909,
  inCart: false,
}
])

const [dp, setDp] = useState(4)
const [showCart, setShowCart] = useState(false)
const [ cart, setCart]= useState([])

const addToCart= ()=>{

}
  return (
    <div className="App">
      <div className="hero">
        <nav>
          <button  onClick={()=>setShowCart(!showCart)}>{showCart?"x":"cart"}</button>
          <Cart showCart={showCart} products={products}/>
        
        </nav>
        
       
      <div className="container">
        <div className="heroText">
          <h1>{products[dp].title}</h1>
          <p>
          {products[dp].dec}{" "}
          </p>
          <h1>${products[dp].price}</h1>
        </div>
        <div className="heroImage">
          <img src={products[dp].img} alt={products[dp].title} />
        </div>        
      </div>
      <div className="heroBtns">
          <button className={` btn ${dp===4?"btnActive":" "}`} onClick={()=>setDp(4)}></button>
          <button className={` btn ${dp===5?"btnActive":" "}`} onClick={()=>setDp(5)}></button>
          <button className={` btn ${dp===6?"btnActive":" "}`} onClick={()=>setDp(6)}></button>
        </div>
      <Cards cardProduct={products}/>
      </div>
    </div>
  );
}

export default App;
