import {useState} from 'react'
import Cards from './components/Cards';

function App() {
const [mainProduct, setMainProduct] = useState([
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
  title: "Pink Unisex Nike",
  dec: 'Lorem dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud',
  img: './images/heroShoe1.png',
  price: 559,
  inCart: false,
},
])
const [cardProduct, setCardProduct] = useState([
{
  id: 1,
  title: "Pink Unisex Nike",
  img: './images/p1.png',
  price: 499,
  inCart: false,
},
{
  id: 2,
  title: "p2",
  img: './images/p2.png',
  price: 499,
  inCart: false,
},
{
  id: 3,
  title: "Nike",
  img: './images/p3.png',
  price: 909,
  inCart: false,
}
])

const [dp, setDp] = useState(1)

  return (
    <div className="App">
      <div className="hero">
        <div className="cart">
          <img src="" alt="" />
        </div>
       
      <div className="container">
        <div className="heroText">
          <h1>{mainProduct[dp].title}</h1>
          <p>
          {mainProduct[dp].dec}{" "}
          </p>
          <h1>${mainProduct[dp].price}</h1>
        </div>
        <div className="heroImage">
          <img src={mainProduct[dp].img} alt={mainProduct[dp].title} />
        </div>        
      </div>
      <div className="heroBtns">
          <button className={` btn ${dp===0?"btnActive":" "}`} onClick={()=>setDp(0)}></button>
          <button className={` btn ${dp===1?"btnActive":" "}`} onClick={()=>setDp(1)}></button>
          <button className={` btn ${dp===2?"btnActive":" "}`} onClick={()=>setDp(2)}></button>
        </div>
      <Cards cardProduct={cardProduct}/>
      </div>
    </div>
  );
}

export default App;
