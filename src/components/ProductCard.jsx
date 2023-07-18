import React from 'react'

const ProductCard = ({item}) => {
  return (
    <div className='card shadow'>
      <img src={item.image} alt={item.name} className='card-img-top' />
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <p className="card-text">{item.text}</p>
        <button className='btn btn-danger'>$ {item.price}</button>

      </div>
    </div>
  )
}

export default ProductCard
