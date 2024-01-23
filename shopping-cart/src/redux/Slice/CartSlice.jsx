import { createSlice } from "@reduxjs/toolkit";

//creating slice
export const CartSlice = createSlice(
    {
        name : "cart",
        //items conating in cart //track state of items in cart
        initialState : [],
        reducers : {
            add : (state, action)=>{
                state.push(action.payload)
            },
            remove : (state, action)=>{
                return state.filter((item) => item.id !== action.payload)
            }
        }
    }
);

export const {add, remove} = CartSlice.actions;
export default CartSlice.reducer;
