import React from 'react'
import ProductCard from './ProductCard'

const Products = ({data}) => {
  return (
    <div className='container my-5 d-flex align-items-center justify-content-center gap-5 flex-wrap'>
      {
        data.length===0 ? <p className='fs-4 my-3 text-danger '>Food not found !!</p> : (
            <>
            {
                data.map((item,index)=>{
                    return <ProductCard key={index} item={item}/>
                })
            }
            </>
        )
      }
    </div>
  )
}

export default Products
