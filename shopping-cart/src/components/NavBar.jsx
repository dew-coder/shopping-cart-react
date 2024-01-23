import React from 'react'
import { NavLink } from 'react-router-dom'
import {BsFillCartFill} from 'react-icons/bs'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const {cart} = useSelector((state)=>state)
  return (
    <div className='nav'>
      <div>
        <img src="https://codehelp-shopping-cart.netlify.app/logo.png" alt="" className='logo'/>
      </div>
      <div className='nav-top'>
      <div >
        <NavLink to={"/"} className='pages'>
            Home
        </NavLink>
      </div>
      <div>
      <NavLink to={"/Cart"}>
            <BsFillCartFill className='pages'/>
            <div>
            {
                cart.length > 0 && 
                <span className='cart-count'>{cart.length}</span>
            }
            </div>
        </NavLink>
      </div>
      </div>
    </div>
  )
}

export default Navbar
