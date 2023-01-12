import React from 'react'
import { Formik } from 'formik'

const TodoList = () => {
  return (
    <Formik initialValues={{
       firstName:""
    }}
    onSubmit={(values) => {
        console.log(values)
       
    }}>{
        formik=>{
            <form onSubmit={formik.handleChange}>
                <label htmlFor='firstName'></label>
                <input 
                id='firstName' 
                type='text'
                {...formik.getFieldProps('firstName')}/>
                <button type='submit'>Submit</button>
            </form>
        }
    }
     
    </Formik>

  )
}

export default TodoList