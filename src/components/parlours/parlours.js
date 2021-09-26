import React,{useState, useEffect } from 'react';
import Cart from '../Cart/Cart';
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


//  < div class="card-group">
//   <div class="card">
//     <img src="..." class="card-img-top" alt="..."/>
//     <div class="card-body">
//       <h5 class="card-title">Card title</h5>
//       <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//     </div>
//     <div class="card-footer">
//       <small class="text-muted">Last updated 3 mins ago</small>
//     </div>
//   </div>
//   </div>
       <div class="row px-4 parlour-container ">
           <div class="row col-lg-9 col-sm-12 row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 bg-danger ">
             <div>
               
             </div>
        {
           parlours.map(parlours => <Parlourstaff
            key={parlours.key}
            parlours={parlours}
            handleAddToCart={handleAddToCart}
        > </Parlourstaff> )              
         }
        </div>

    <div className="col-md-3">
          <Cart cart={addCartPalours}/>

          </div>
            
      </div>
 

  
    );
};

export default Parlour;