import { createSlice } from "@reduxjs/toolkit";
export const counterSlice = createSlice({
   name:'counter',
   initialState:{
    value: 0,
   },
   reducers:{
    increment: (state)=>{
        state.value += 1
    },
    decreament:(state)=>{
        state.value -=1
    },
    increamentByAmount: (state,action)=>{
        state.value += action.payload
    },
   }, 
})

export const {increment,decreament,increamentByAmount} = counterSlice.actions
export default counterSlice.reducer