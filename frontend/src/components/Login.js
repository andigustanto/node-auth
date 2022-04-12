import React, { useState } from 'react'
import axios from "axios"
import {useNavigate} from 'react-router-dom'

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();

  const Login = async (e) => {
    e.preventDefault()
    try{
      await axios.post('http://localhost:5000/login', {
        email: email,
        password: password
      });
      navigate("/dashboard")
    }catch (e) {
      if (e.response){
        setMsg(e.response.data.msg)
      }
    }
  }

  return (
    <section className="hero has-background-grey-light is-fullheight is-fullwidth">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-4-desktop">
              <form onSubmit={Login} className="box">
                <p className="has-text-centered">{msg}</p>
                <div className="field mt-5">
                  <label className="label">Username or Email</label>
                  <div className="controls">
                    <input type="text" className="input" placeholder="Username or Email"
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="field mt-5">
                  <label className="label">Password</label>
                  <div className="controls">
                    <input type="password" className="input" placeholder="*******"
                           value={password}
                           onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
                <div className="field mt-5">
                  <button className="button is-success is-fullwidth">Login</button>
                  <p className="has-text-centered mt-3" >Don't have an account? <a href="/register">Register here</a></p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login