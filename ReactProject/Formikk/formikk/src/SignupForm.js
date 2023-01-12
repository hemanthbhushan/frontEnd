import React, { useState } from "react";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import Table from "./Table";
import "./SignupForm.css";

const SignupForm = () => {
  const [userList, setUserList] = useState([]);

  function removeAll() {
    setUserList([]);
  }
  const handleEdit = (key) => {
    const editedValue = userList.find((element,id)=>{
          return id===key
        })

     formik.setFieldValue("firstName", editedValue.firstName)
     formik.setFieldValue("lastName", editedValue.lastName)
     formik.setFieldValue("email", editedValue.email)
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
    }),
    onSubmit: (values) => {
      setUserList([...userList, values]);
    },
  });
  return (
    <div className="Signup">
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          className="form-control"
          type="text"
          {...formik.getFieldProps("firstName")}
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <div>{formik.errors.firstName}</div>
        ) : null}

        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          type="text"
          className="form-control"
          {...formik.getFieldProps("lastName")}
        />
        {formik.touched.lastName && formik.errors.lastName ? (
          <div>{formik.errors.lastName}</div>
        ) : null}

        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          type="email"
          className="form-control"
          {...formik.getFieldProps("email")}
        />
        {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
        ) : null}

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <button type="button" className="btn btn-dark" onClick={removeAll}>
          Remove All
        </button>
      </form>

      <Table
        userList={userList}
        setUserList={setUserList}
        handleEdit={handleEdit}
      />
    </div>
  );
};

export default SignupForm;
