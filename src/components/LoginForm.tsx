import React, { useState } from 'react';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [next, setNext] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const handleClick = (event: React.FormEvent) => {
    event.preventDefault();
    if (!next) {
      if (!email) {
        alert('Please fill in all fields');
        return;
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return;
      }
      setNext(true);
      return;
    }
    if (!email || !password) {
      alert('Please fill in all fields');
      return;
    }

    setIsLogin(true);
    // login console msg
    console.log('Email:', email);
    console.log('Password:', password);
  };


  return (
    <>
      <div className="login-card position-absolute top-50 end-0 rounded p-4 translate-middle shadow mb-5 rounded" style={{ maxWidth: '340px', minHeight: '400px', width: '100%', backgroundColor: '#485c6e' }}>
        <h2 className="mb-5 text-center text-white">{next ? 'Welcome' : 'User Login'}</h2>
        {!isLogin ? <form onSubmit={() => onclick} className="mt-3">
          {!next && <div className="mb-3">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder='Email address'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          }
          {next && <div className="mb-3">
            <input
              type="password"
              className="form-control mb-3"
              id="password"
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          }
          <div className='text-end'>
            <button type="submit" className="btn text-secondary btn-light" onClick={handleClick}>{next ? 'Login' : 'Next'}</button>

          </div>
        </form> :
          <div className="text-center text-white mt-3">
            <h3>Login Successful</h3>
            <p>Welcome back, {email}!</p>
          </div>
        }
      </div>
    </>
  )
};

export default LoginForm;