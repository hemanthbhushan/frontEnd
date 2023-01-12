import React from 'react'

const ContactList = (props) => {

    const {name,Email} = props.x
  return (
    <div className='cointainer'>
    <div className='name'>{name}</div>
    <div className='email'>{Email}</div>
</div>
  )
}

export default ContactList