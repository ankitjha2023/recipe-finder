import React from 'react'

const Navbar = ({handleChange}) => {
  return (
   <div className="container-fluid py-3 bg-dark  text-light fixed-top">
    <div className="row">
        <div className="col-lg-8 col-md-6">
            <h2 id='logo'>FoodyBaba</h2>
        </div>
        <div className="col-lg-4 col-md-6">
            <input type="search" className='form-control' placeholder='Enter Food name..' onChange={handleChange}/>
        </div>
    </div>
   </div>
  )
}

export default Navbar
