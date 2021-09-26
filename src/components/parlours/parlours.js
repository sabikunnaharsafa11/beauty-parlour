import React,{useState, useEffect } from 'react';
import Cart from '../Cart/Cart';
import './parlours.css'
import Parlourstaff from '../Parlourstaff/Parlourstaff'
const Parlour = () => {
  const [parlours, setParlour] = useState([]);

  useEffect(() => {
    fetch('./parlour.JSON')
            .then(res => res.json())
            .then(data => setParlour(data))
}, []);

const [addCartPalours, setAddCartPalours] = useState([]);

const handleAddToCart = (parlour)  => {
  // console.log(parlour)
  const newCart =[...addCartPalours, parlour]
  setAddCartPalours (newCart)
}
    return (
      <div className="container">
         <div className="row mt-5"> 
         <div className="col-lg-9">
            <div className="row row-cols-1 row-cols-md-3 g-4"> 
            { parlours.map(parlour => 
            <Parlourstaff
            key={parlours.id} 
            parlour={parlour}
            handleAddToCart={handleAddToCart} >
                </Parlourstaff>) } 
                </div> 
                </div> 
                <div className="col-lg-3"> 
                <Cart cart={addCartPalours}> </Cart>
                 </div> 
                 </div> 
                 </div>
  
    );
};

export default Parlour;