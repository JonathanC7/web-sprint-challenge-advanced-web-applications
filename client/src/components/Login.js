import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";


const Login = () => {
  // make a post request to retrieve a token from the api
  const { push } = useHistory();
  const [error, setError] = useState('');
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  })
  // when you have handled the token, navigate to the BubblePage route
  const changeHandler = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
  }

  const submitHandler = e => {
    e.preventDefault();
    axiosWithAuth()
      .post('/login', credentials)
      .then(res => {
        localStorage.setItem('authToken', res.data.payload);
        push('/bubbles')
      })
      .catch(err => {
        setError(err.message)
        console.log('Log In Fail: ', err.message);
      })
  }

  return (
    <form onSubmit={submitHandler} className='login-form'>
      <label htmlFor='username'>
        <input 
        className='credentials'
        type='text'
        name='username'
        id='username'
        value={credentials.username}
        placeholder='Username'
        onChange={changeHandler} />
      </label>
      <label htmlFor='password'>
        <input 
        className='credentials'
        type='password'
        name='password'
        id='password'
        value={credentials.password}
        placeholder='Password'
        onChange={changeHandler} />
      </label>
      <button className='login-button'>Log In</button>
      <p className='error'>{error}</p>
    </form>
  );
};

export default Login;
