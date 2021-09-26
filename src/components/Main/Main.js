import React,{useState, useEffect } from 'react';

const Main = () => {
  const [parlour, setParlour] = useState([]);
  const [selectedparlourstaff, setSelectedparlourstaff] = useState([]);

  useEffect(() => {
    fetch('./parlour.JSON')
            .then(res => res.json())
            .then(data => console.log(data))
}, []);

const handleCart = parlour=> {
    // console.log(programmer);
    const newArr = [];
    // setSelectedProgrammers(newArr);
}


    return (
        <div>
            
        </div>
    );
};

export default Main;