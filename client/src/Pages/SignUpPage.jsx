import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const BASE_URL = 'http://localhost:4000';

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const signup = async () => {
    console.log('signup', formData);
    let responseData;

    await fetch(`${BASE_URL}/signup`, {
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
        <div className="login text-center pt-8 text-3xl">Sign Up</div>
        <div className="main-section flex flex-col max-w-[20rem] mx-auto pt-28 ">
          <input name="username" value={formData.username} onChange={changeHandler} type="text" id="username" placeholder="Username" className="mt-4 h-7 p-3" />
          <input name="email" value={formData.email} onChange={changeHandler} type="email" id="email" placeholder="Email" className="mt-4 h-7 p-3" />
          <input name="password" value={formData.password} onChange={changeHandler} type="password" id="password" placeholder="Password" className="mt-4 h-7 p-3" />

          <button
            className="submit text-white bg-[#15133C] mx-auto px-8 py-2 mt-5"
            onClick={() => {
              signup();
            }}
          >
            Sign Up
          </button>
          <div className="pt-5 mx-auto">
            Already a member,
            <Link to="/login"> Click Here To Sign In</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
