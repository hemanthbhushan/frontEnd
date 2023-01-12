import React,{useState} from 'react'

const TextDisplay = (props) => {
  const [value,setValue] = useState(" ")

     const changeHandler = (e)=>setValue(e.target.value)
     
     

  return (
    <div>
        <input type="text" value={value} placeholder="Type here" onChange={changeHandler} /><br></br>
        
        

        {value}
    </div>
  )
}

export default TextDisplay