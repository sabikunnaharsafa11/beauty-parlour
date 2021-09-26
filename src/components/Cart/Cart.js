import React from 'react';

const Cart = (props) => {
    const {cart } = props 
    console.log(cart)
    // const reducerProcess = (previousCost, currentCost) => previousCost + currentCost.price;
    // const totalAmount = addCartPalour.reduce(reducerProcess, 0);
    return (
        <div className="card-design">
             <h1>Total Add: {cart.length}</h1>
            {/* <h2>Amount: {totalAmount}</h2> */}
            {
               cart.map(element =><li key={element.id}>{element.name}
                </li>)
            }
     
        </div>
    );
};

export default Cart;
