import React,{useState} from 'react'

const ChangeValue = () => {
    const [change,setChange] = useState([]);

  return (
    <div>
        <input type="text" name="text" placeholder='enter' value = {change} onChange={(e)=>setChange(e.target.value)}/>
        <p>{change}</p>
    </div>
  )
}

export default ChangeValue