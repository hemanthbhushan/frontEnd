import React from 'react'
import { Formik } from 'formik'
import * as Yup from "yup";

const PartyInvitation = () => {
  return (
    <Formik initialValues={{friendName:""}}
    validationSchema={Yup.object({
        friendName:Yup.string().max(10,"characters must be 10 or less").required("Required")
    })}
    onSubmit = {(values,{setSubmitting})=>{
        console.log(values)
        setSubmitting(false)
    }}
    >
        {formik=>(
            <form onSubmit = {formik.handleChange}>
                <label htmlFor='friendName'>Friend name</label>
                <input id="friendName"
                       type="text"
                       {...formik.getFieldProps('friendName')}
                />
                {formik.touched.friendName && formik.errors.friendName ? (
                   <div>{formik.errors.friendName}</div>
                    ) : null}
                
                <button type='submit'>Submit</button>
            </form>
        )}


    </Formik>
  )
}

export default PartyInvitation