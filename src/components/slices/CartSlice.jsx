import  {createSlice}  from '@reduxjs/toolkit'

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems:localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
  },
  reducers: {
    cartTotal:(state,action)=>{
    //  console.log(state.cartItems)
     console.log(action.payload)
    //  state.cartItems.push(action.payload)
    const findIndex = state.cartItems.findIndex((item)=> item.id === action.payload.id)
    console.log(findIndex)
    if(findIndex >= 0 ){
      state.cartItems[findIndex].cartQun += 1;
    }
    else{
       state.cartItems.push({...action.payload, cartQun: 1 })
    }
     localStorage.setItem("cartItems", JSON.stringify(state.cartItems))

    },
    cartQuentity:(state,action)=>{
      console.log(state.cartItems);
      console.log(action.payload);
     if(action.payload.type === "increment"){
       console.log(state.cartItems)
       state.cartItems[action.payload.id].cartQun += 1;
     }else{
            if( state.cartItems[action.payload.id].cartQun  > 1){
               state.cartItems[action.payload.id].cartQun -= 1;
            }

     }
         localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
    },
    removeFromCart:(state,action)=>{
      state.cartItems.splice(action.payload,1)
       localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    }
 
  }
})

// Action creators are generated for each case reducer function
export const {cartTotal,cartQuentity,removeFromCart} = CartSlice.actions

export default CartSlice.reducer