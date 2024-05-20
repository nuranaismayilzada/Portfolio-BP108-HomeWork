import { createSlice } from '@reduxjs/toolkit'
import { productSlice } from './products';
import { useEffect } from 'react';

export const getData= async ()=>{
    const data=await axios.get("http://localhost:3000/api/products")
}
const initialState = {
  value: 0, 
}
useEffect(() => {
   dis()
}, [])

export const productSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

export const {incrementByAmount } = productSlice.actions

export default productSlice.reducer