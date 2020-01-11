import React, { useState } from 'react';
import axios from 'axios';


function RegisterPage() {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const addAccount = (event) => {
    event.preventDefault()

  axios.post('/register', {username, email, password})
    .then((result) => {
      console.log(result)
      console.log(result.data)
    })
    .catch(err => console.log(err))
  }


  return (
    <div className='register'>
      <form id="register-form" onSubmit={addAccount}>
        <p>Username</p>
        <input id="username" name="username" value={username} onChange={event => setUsername(event.target.value)}/>
        <p>Email</p>
        <input id="email" name="email" value={email} onChange={event => setEmail(event.target.value)}/>
        <p>Password</p>
        <input id="password" name="password" value={password} onChange={event => setPassword(event.target.value)}/>
        <br />
        <input type="submit" value="Register"/>
      </form>
      <button className="register_back_btn">Back</button>
    </div>
  );
}

export default RegisterPage;