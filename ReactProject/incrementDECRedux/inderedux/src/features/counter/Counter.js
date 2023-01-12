import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { decreament,increment,increamentByAmount } from './counterSlice'
const Counter = () => {
  const count = useSelector((state)=>state.counter.value)
  const dispatch = useDispatch() 


  return (
    <div>
       <div>
        <button onClick={()=>dispatch(increment())}>increment</button>
        <button onClick={()=>dispatch(decreament())}>decreament</button>
        <span>{count}</span>
        {/* <button onClick={()=>dispatch(increamentByAmount())}>increamentByAmount</button> */}
       </div>

    </div>
  )
}

export default Counter