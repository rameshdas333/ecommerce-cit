import { configureStore } from '@reduxjs/toolkit'
import CartSlice from '../components/slices/CartSlice.jsx'

export default configureStore({
  reducer: {
    cartDetails:CartSlice
  }
})