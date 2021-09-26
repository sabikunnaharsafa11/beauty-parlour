import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart } = props; 
    // console.log(cart)
    const totalSalary = cart.reduce ((previous, current) => previous + current.salary, 0)
    return (
        <div className="card-design">
             <h1>Total Add: {cart.length}</h1>
             <h1> totalSalary: ${totalSalary}</h1>
        
           
            {
               cart.map(element =><div className="cart-info btn btn-dark">
               <div className="cart-img">
               <img className="w-100 rounded-circle" src={element.img} alt="" />
               </div>
               <h4 key={element.id}>{element.name}
                </h4>
               </div>)
            }
     
        </div>
    );
};

export default Cart;
