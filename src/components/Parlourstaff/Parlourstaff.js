import React from 'react';
import './Parlourstaff.css'

const Parlourstaff = (props) => {
    console.log(props)
    const { name, img, gender, address, phone, salary } = props.parlour;
    return (
        <div>
            <div className="card parlour-card parlour-section">
            <img className="img-desigen" src={img} alt="" />
            <h5>{name}</h5>
            <p> gender: {gender}</p>
            <p>address: {address}</p>
            <p>Phone: {phone}</p>
            <p>Salary: {salary}</p>
            <button className="btn btn-dark btn1" onClick= {() => props.handleAddToCart(props.parlour)}>Parlour Staffs</button>
        </div>
        </div>
    );
};

export default Parlourstaff;