import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import { useUserContext} from '../../context/user_context';

// Styled component for the form
const SignupForm = styled.form`
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
    color:purple;
  }

  input {
    margin-bottom: 16px;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  button {
    padding: 10px 15px;
    background-color: #4caf50;
    color: white;
    border: 1px solid #4caf50;
    transition: ease-in-out background-color 250ms, ease-in-out color 250ms;
  }

  button:hover {
    cursor: pointer;
    background-color: white;
    color: #4caf50;
  }

  .error {
    color: #ff0000;
    font-size: 14px;
    margin-top: -8px;
    margin-bottom: 16px;
  }
`;

const Signup = () => {
  const navigate = useNavigate();
  const { updateLoggedInUser } = useUserContext(); 


  
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      lastName: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string()
        .min(8, 'Password must be at least 8 characters long.')
        .matches(/(?=.*[0-9])/, 'Password must contain at least one number.')
        .required('Required'),
    }),
    onSubmit: async (values) => {
      try {
      const response = await axios.post('https://6557461bbd4bcef8b6125d04.mockapi.io/RegisterUser',values)
        if (response.status===201){
            console.log('registration success')
         navigate('/login');
        }
      } catch (error) {
        
      }
  
    }
    });

  return (
    <SignupForm onSubmit={formik.handleSubmit}>
      <h1 style={{fontSize:'15px',textAlign:'center'}}>SignUp</h1><br />
      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        name="firstName"
        placeholder="Enter your firstname"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.firstName}
      />
      {formik.touched.firstName && formik.errors.firstName ? (
        <div className="error">{formik.errors.firstName}</div>
      ) : null}

      <label htmlFor="lastName">Last Name</label>
      <input
        id="lastName"
        name="lastName"
        placeholder="Enter your lastname"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.lastName}
      />
      {formik.touched.lastName && formik.errors.lastName ? (
        <div className="error">{formik.errors.lastName}</div>
      ) : null}

      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        placeholder="Enter your email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <div className="error">{formik.errors.email}</div>
      ) : null}

      <label htmlFor="password">Password</label>
      <input
        id="password"
        name="password"
        placeholder="Enter your password"
        type="password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
      />
      {formik.touched.password && formik.errors.password ? (
        <div className="error">{formik.errors.password}</div>
      ) : null}

      <button type="submit">Submit</button>
    </SignupForm>
  );
};

export default Signup;
