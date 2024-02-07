import React from "react";

import { Formik } from "formik";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../firebase.config";
import RoundedButton from "../../components/roundedButton/RoundedButton";

const Signup = () => {
  const addUser = async () => {
    try {
      const docRef = await addDoc(collection(db, "users"), {
        first: "Ada",
        last: "Lovelace",
        born: 1815,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  return (
    <div>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        validate={(values) => {
          const errors = { email: "", password: "" };
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <input
              type="name"
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            />
            <input
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email && errors.email}
            <input
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            {errors.password && touched.password && errors.password}
            <RoundedButton
              type="submit"
              disabled={isSubmitting}
              style={{
                width: "200px",
                backgroundColor: "white",
                color: "black",
              }}
            >
              Submit
            </RoundedButton>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Signup;
