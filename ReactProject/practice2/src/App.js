import React , {useState}from 'react'
import Contacts from './Contacts';
import TextDisplay from './TextDisplay';

const App = () => {
  const [text,setText] = useState("")
  const contactList = [
    {
      name:"hemanth",
      Email:"hemanthbhushan@gmail.com"
    },
    {
      name:"bhushan",
      Email:"randomm@gmail.com"
    }
  ];

  const store = [
    {
      text:""
    }
  ]
  
  const display = (text)=>{
       return setText(text)
    
  

  }


  return (
    <div>
      <Contacts contactList = {contactList}/>
      <TextDisplay display = {display}/>
    </div>
  )
}

export default App