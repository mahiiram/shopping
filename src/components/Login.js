import React, { useState } from 'react';
import '../styles/Login.css'
import { useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate()
  const [UnameOrEmail, setUnameOrEmail] = useState("");
  const [password, setpassword] = useState("");

  const user = {
    email: "test@test.com",
    username: "test123",
    password: "123456"
  };



  const handleSubmit = (e) => {
    e.preventDefault();

    if (UnameOrEmail === user.email || UnameOrEmail === user.username) {
      if (password === user.password) {
        localStorage.setItem('username',user.username)
        navigate('/')
      } else {
        console.log("wrong password");
      }
    } else {
      console.log("please check you username or Email");
    }
  };
  return (
    
        <div className="container">
              <div className="card">
                <h3 className='mt-5'>Login</h3>
                <div className="card-body p-5">
                  <form onSubmit={(e) => handleSubmit(e)}>

                    <div className="form-outline mb-4">
                      <input type="text" id="name" className="form-control form-control-md" name='username' placeholder='Username' value={UnameOrEmail}
                     onChange={(e) => setUnameOrEmail(e.target.value)}/>
                    </div>
                    <div className="form-outline mb-4">
                      <input type="password" id="password" className="form-control form-control-md" name='password' placeholder='Passsword'value={password}
            onChange={(e) => setpassword(e.target.value)}/>
                    </div>
                    <div className="d-flex justify-content-center">
                      <button type="submit"
                        className="btn btn-success">Login</button>
                    </div>
                  </form>
          
                </div>
              </div>
              <h6>username:test123</h6>
              <h6>password:123456</h6>
        </div>


  )
}

export default Login