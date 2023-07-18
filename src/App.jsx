import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Products from './components/Products';
import products from './api/products';
import ButtonContainer from './components/ButtonContainer';

const App = () => {
  const [data, setData] = useState(products);

  const handleChange = (e) => {
    const searchData = e.target.value.toLowerCase();
    const filter = products.filter((product) =>
      product.name.toLowerCase().includes(searchData)
    );
    setData(filter);
  };
 
  const handleClick = (type) =>{
    if(type==="all"){
      setData(products)
    }else{

      const filter = products.filter((product) =>
        product.type.includes(type)
      );
      setData(filter);
      console.log(data)
    }
   
  }

  return (
    <>
      <Navbar handleChange={handleChange} />
      <ButtonContainer handleClick={handleClick}/>
      <Products data={data} />
    </>
  );
};

export default App;
