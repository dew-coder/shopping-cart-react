import React from 'react'
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux'
import {add,remove} from "../redux/Slice/CartSlice"

const Product = ({post}) => {
    const {cart} = useSelector((state)=> state)
    const dispatch = useDispatch();

    function addtocart(){
        dispatch((add(post)));
        toast.success("Item added to cart")
    }
    function removefromcart(){
        dispatch((remove(post.id)));
        toast.error("Item removed from cart")
    }

  return (
    <div className='product'>
      <div className='pro-up'>
        <h2 className='pro-heading'>{post.title.split("").slice(0,13).join("") + "..."}</h2>
        <p className='pro-desc'>{post.description.split(" ").slice(0,8).join(" ") + "..."}</p>
        <img src={post.image} alt="{post.title}" className='pic'/>
      </div>
      <div className='pro-down'>
        <p className='pro-price'>${post.price}</p>
        {
            //cart me wo item h to remove btn agar ni to to add btn so it means hme cart nikalni pregi
            cart.some((p) => p.id === post.id) ?
            (<button onClick={removefromcart} className='pro-btn'>Remove Item</button>) : 
            (<button onClick={addtocart} className='pro-btn'>Add to Cart</button>)
        }
      </div>
    </div>
  )
}

export default Product
