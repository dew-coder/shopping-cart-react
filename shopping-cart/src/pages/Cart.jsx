import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../components/CartItem'
import { NavLink } from 'react-router-dom'

const Cart = () => {
    //jo state pdi h usi ko lelo
    const {cart} = useSelector((state)=>state)
    const [totalamount, settotalamount] = useState(0);

    //reduce use to total all 
    //when ever cart array is changes every time it happens
    useEffect(()=>(
        settotalamount(cart.reduce((accumulator, curr) => accumulator + curr.price, 0))
    ), [cart])

  return (
    <div>
      <div className='cart-whole-page'>
      {
        cart.length > 0 ? (
        <div className='cart-both'>
            {
                cart.map((item) => {
                    return <div key={item.id} className='cart-left'> 
                    <CartItem item = {item} />
                    </div> 
                })
            }
            <div className='cart-right'>
            <div>
            <div>Your Cart</div>
                <div>Summary</div>
                <p>Total items : {cart.length}</p>
            </div>
            <div>
                <p>Total Amount : {totalamount}</p>
            </div>
            </div>
        </div>
        ) : (
        <div className='cart-both-empty'>
            <h1 className='em-cart'>Your cart in empty!</h1>
            <NavLink to={"/"}><button className='em-cart-btn'>Shop now</button></NavLink>
        </div>
        
        )
      }
      </div>
    </div>
  )
}

export default Cart
