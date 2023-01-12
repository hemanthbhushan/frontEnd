import {createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name:"todos",
    initialState:[],
    reducers:{
        addTodos:(state,action)=>{
            const newTodo = {
            firstName:action.payload.firstName,
            lastName:action.payload.Namelast,
            emil:action.payload.email
            }

            state.push(newTodo)
        },
      

    }
});
export const {addTodos} = createSlice.actions;