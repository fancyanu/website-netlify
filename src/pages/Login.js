import React, {useState} from 'react';

export const Login=(props) => {

  const [username, setUsername]=useState('');
  const [password, setPassword]=useState('');

  const loggedIn = localStorage.getItem('loggedIn');
  if (loggedIn) {
    window.location.href = '/home';
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(username === 'admin' && password === 'admin'){
      console.log("Successful login");
      localStorage.setItem('loggedIn', true);
      window.location.href = '/home';
    }else{
      console.log("Invalid credentials");
    }
  }

  return(
    <div>
      <section className='section'>
        <h2>Login Page</h2>
      </section>
      <section className='section2'>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">username</label>
          <input value={username} onChange={(e) => setUsername(e.target.value)} type="username" placeholder="username" id="username" name="username"/>
          <label htmlFor="password">password</label>
          <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password" id="password" name="password"/>
          <button disabled={!username || !password}>Log In</button>
        </form>
      </section>
      <section className='section3'>
        <button onClick={() => props.onFormSwitch('register')}>If not registered, Click here to register</button>
      </section>
    </div>
  );
};

export default Login;