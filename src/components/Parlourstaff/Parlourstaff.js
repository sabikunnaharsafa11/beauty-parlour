import React from 'react';

const Parlourstaff = (props) => {
    // console.log(props)
    const { name, img, gender, address, phone, salary } = props.parlours;
    return (
        <div>
            <div className="col-md-4 parlour-card parlour-section">
            <img src={img} alt="" />
            <h5>{name}</h5>
            <p> gender: {gender}</p>
            <p>address: {address}</p>
            <p>Phone: {phone}</p>
            <p>Salary: {salary}</p>
            <button className="btn btn-success" onClick= {() => props.handleAddToCart(props.parlours)}>Parlour Staffs</button>
        </div>
        </div>
    );
};

export default Parlourstaff;