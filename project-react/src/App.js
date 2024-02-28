

import './App.css';
import Data from './Component/data/Data.json';
import COURSE from './Component/Course/Course.js';
import Hader from './Component/Hader/Hader.js';
import CART from './Component/Cart/Cart.js';
import { useState } from 'react';






function App() {

const [cart, setCart] = useState([]);

const handleClick = (data) =>{
  const newCart = [...cart, data];
  setCart(newCart);

}



  return (
    <div>
      <Hader></Hader>
      <CART cart ={cart}></CART>
      

  
      {
        Data.map(data => <COURSE handleClick = {handleClick}  data={data}></COURSE>)
        
      }
    
   
    </div>
  );
}

export default App;
