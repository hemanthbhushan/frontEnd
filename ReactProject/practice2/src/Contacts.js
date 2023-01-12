import React from 'react'

const Contacts = (props) => {

    const renderList = props.contactList.map((contact)=>{
        return(
            <div>
                <div>{contact.name}</div>
                <div>{contact.Email}</div>
            </div>
        )

    })
  return (

    <div>
        {renderList}
      
    </div>
  )
}

export default Contacts