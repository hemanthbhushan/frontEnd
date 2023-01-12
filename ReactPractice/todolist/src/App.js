import React,{useState} from 'react'
import Contact from './Contact'
import ChangeValue from './ChangeValue'
import ChildToParent from './ChildToParent'

const App = () => {
  const [value,setValue] = useState("");

 
  const contactList = [
    {
      name:"hemanth",
      Email:"hemanthbhushan@gmail.com"
    },
    {
      name:"bhushan",
      Email:"random@gmail.com"
    }
  ]
  const changeValueHaldler = (e)=>{
    setValue(e);


  }

  return (
    <div>
      <Contact contactList={contactList}/>
      <ChangeValue/>
      <ChildToParent changeValueHaldler = {changeValueHaldler}/>
      {value}
      </div>
  )
}

export default App