import React from 'react';
import './Parlourstaff.css'

const Parlourstaff = (props) => {
    console.log(props)
    const { name, img, gender, address, phone, salary } = props.parlour;
    return (
        <div>
            <div className="card parlour-card parlour-section">
            <img className="img-desigen" src={img} alt="" />
            <h3 className="fw-bold mt-3">{name}</h3>
            <p className="fw-bolder">Gender: {gender}</p>
            <p className="fw-bolder" style={{color:"#FF6F00"}}>Salary: ${salary}</p>
            <p className="fw-bolder" >Address: {address}</p>  
            <p  className="fw-bolder"> Phone: {phone}</p>  
            <button className="btn btn-dark btn1 fw-bolder fs-5" onClick= {() => props.handleAddToCart(props.parlour)}><i class="fas fa-plus-square"></i>  Parlour Staffs</button>
        </div>
        </div>
    );
};

export default Parlourstaff;