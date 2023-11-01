import React, { useState } from 'react'
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
    <section className="bg-image">

      <div className="mask d-flex align-items-center h-100">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center mt-5">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card" style={{ borderRadius: "15px" }}>
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
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Login