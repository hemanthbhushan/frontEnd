import './App.css';
import {formik, useFormik} from 'formik'
import React from 'react'

const App = () => {

  const  formik = useFormik({
    initialValues:{
      userName:"",
      email:"",
      password:""
    }
  })
  return (
    <div>
      <form>
        <input type="text" name = "userName" onChange={formik.handleChange} />

      </form>
    </div>
  )
}

export default App