import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import { isAuth, login } from "./Auth";
import { useEffect } from "react";
import { useUserContext } from "../../context/user_context";
import axios from 'axios';

const StyledLogin = styled.form`
padding-top: 10px;
display: flex;
flex-direction: column;
max-width: 300px;
margin: auto; 
padding: 35px;
border: 1px solid #ccc;
border-radius: 8px;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
background:lavender;
margin-top: 35px;

label {
  margin-bottom: 8px;
  font-weight: bold;
  color:purple;
}

input {
  margin-bottom: 16px;
  padding: 10px;
  width:100%;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 10px;
 
}

button {
  padding: 10px 12px;
  width:100%;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  margin-top:3px;
  transition: ease-in-out background-color 250ms, ease-in-out color 250ms;
}

button:hover {
  background-color: #45a049;
}

.error {
  color: #ff0000;
  font-size: 10px;
  margin-bottom: 16px;
}

.input-feedback {
  color: #ff0000;
  font-size: 14px;
  margin-top: -8px;
  margin-bottom: 16px;
}

p {
  margin-top: 16px;
  font-size: 14px;
}

.link {
  color: #0066cc;
  text-decoration: none;
  font-weight: bold;
}

.link:hover {
  text-decoration: underline;
}
`;


const loginValidationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('* Required'),
    password: Yup.string()
      .min(3, 'Password should be at least 3 characters')
      .max(12, 'Password should be at most 8 characters')
      .matches(/^[a-zA-Z0-9!@#$%^&*]{6,16}$/, 'Password must contain at least one special character')
      .required('* Required'),
  });


const LoginForm = () => {
  const navigate = useNavigate();
  const { setLoggedInUser } = useUserContext(); 

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: loginValidationSchema,
    onSubmit: async (values) => {
      try {
        await login(values.email, values.password);
        const response = await axios.get('https://6557461bbd4bcef8b6125d04.mockapi.io/RegisterUser',values)
        setLoggedInUser(response.data);
        navigate('/');
      } catch (error) {
        console.error("Login failed:", error);
        formik.setErrors({ general: error });
      }
    },
  });

  useEffect(() => {
    const redirectToHome = () => {
      if (isAuth()) {
        navigate('/');
      }
    };
  
    redirectToHome(); // Call it immediately to handle the initial state
  
    return () => {
      // Return an empty function or any other cleanup logic if needed
    };
  }, [navigate]);

  return (
    <StyledLogin>
      <form action="" onSubmit={formik.handleSubmit}>
      <h1 style={{fontSize:'15px',textAlign:'center'}}>Login</h1><br />
        {formik.errors.general && (
          <section className="alert alert-danger" role="alert">
            {formik.errors.general.message}
          </section>
        )}

        <label htmlFor="email">Email</label><br />
        <input
          id="email"
          name="email"
          type="text"
          placeholder="Enter your email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={
            formik.touched.email && formik.errors.email ? "error" : ""
          }
        />
        {formik.errors.email && formik.touched.email && (
          <div className="input-feedback">{formik.errors.email}</div>
        )}

       <br/> <label htmlFor="password">Password</label><br />
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Enter your password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={
            formik.touched.password && formik.errors.password ? "error" : ""
          }
        />
        {formik.errors.password && formik.touched.password && (
          <div className="input-feedback">{formik.errors.password}</div>
        )}
 
        <button type="submit">Login</button>
       
        <p>
        Don't have an account? <Link to="/signup">Sign up here</Link>
      </p>
      </form>
      </StyledLogin>
  );
};

export default LoginForm;
