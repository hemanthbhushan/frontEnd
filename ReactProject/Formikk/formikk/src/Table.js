import React ,{useState}from 'react'
import './Table.css'

const Table = ({userList,setUserList,handleEdit}) => {

  //  const[updateList,setUpdateList] = useState(null);
   
  function removeUser(key){
    const removeUserList = userList.filter((element,id)=>{
      return key!==id
    })
    setUserList(removeUserList)
    console.log(removeUserList,"updateList")
  }

  // function editUser(key){
  //   const editedValue = userList.find((element,id)=>{
  //     return id===key
  //   })
  //   setUpdateList(editedValue) 

  //   console.log(updateList)
  // }
  
  
  return (
    <div className="App">
    <table>
      <tr>
        <th>First name</th>
        <th>lastName</th>
        <th>Email</th>
      </tr>
      {userList.map((val, key) => {
        return (
          <tr key={key}>
            <td>{val.firstName}</td>
            <td>{val.lastName}</td>
            <td>{val.email}</td>
            
            <button type="button" className="btn btn-danger" onClick={() => removeUser(key)}>Remove</button>
            <button type="button" className="btn btn-warning" onClick={()=> handleEdit(key)}>Edit</button>
            
            
          </tr>
        )
      })}
    </table>
  </div>
  )
}

export default Table