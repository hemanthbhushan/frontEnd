import React from 'react'
import './Contact.css'
import ContactList from './ContactList'

const Contact = (props) => {

    const renderList = props.contactList.map((x,index)=>{
        return(
          <ContactList x = {x} key = {index}/>
        )
    })
  return (
    <div>
   {renderList}
    </div>
  )
}

export default Contact