import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const BASE_URL = process.env.REACT_APP_PROTOCOL + process.env.REACT_APP_HOST_URL;

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
  });
  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const login = async () => {
    console.log('login', formData);
    let responseData;

    await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: {
        Accept: 'application/form-data',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => (responseData = data));

    if (responseData.success) {
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace('/');
    } else {
      alert(responseData.message);
    }
  };

  return (
    <div className="bg-[#73777B] min-h-screen flex flex-col justify-center items-center">
      <div className="container min-h-[34rem] max-w-[50rem] bg-[#F1EEE9] rounded-xl">
        <div className="login text-center pt-8 text-3xl">Log In</div>
        <div className="main-section flex flex-col max-w-[20rem] mx-auto pt-28 ">
          <input value={formData.email} onChange={changeHandler} type="email" name="email" placeholder="Email" className="h-7 p-3" />
          <input value={formData.password} onChange={changeHandler} type="password" name="password" placeholder="Password" className="mt-4 h-7 p-3" />

          <button
            className="submit text-white bg-[#15133C] mx-auto px-8 py-2 mt-5"
            onClick={() => {
              login();
            }}
          >
            Sign In
          </button>
          <div className="pt-5 mx-auto">
            If you don't have an account,<Link to="/SignUpPage"> Click Here To Sign Up</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
