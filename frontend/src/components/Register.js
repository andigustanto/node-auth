import React, {useState} from 'react'
import axios from "axios"
import {useNavigate} from 'react-router-dom'

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');
  const [msg, setMsg] = useState('')
  const navigate = useNavigate()

  const Register = async (e) => {
    e.preventDefault()
    try{
      await axios.post('http://localhost:5000/users', {
        name: name,
        email: email,
        password: password,
        confPassword: confPassword
      })
        .then(res => {
          console.log(res.data)
          if (res.data.state) {
            setMsg(res.data.msg)
            //toast.success(res.data.msg)
            setTimeout(() => {
              navigate('/')
            }, 2000)
          } else {
            setMsg(res.data.msg)
            //toaster.notify(res.data.msg)
          }
        })
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
              <form onSubmit={Register} className="box">
                <p className="has-text-centered has-text-danger">{msg}</p>
                <div className="field mt-5">
                  <label className="label">Name</label>
                  <div className="controls">
                    <input type="text" className="input" placeholder="Name"
                           value={name}
                           onChange={(e) => setName(e.target.value)}
                           required={true}
                    />
                  </div>
                </div>
                <div className="field mt-5">
                  <label className="label">Email</label>
                  <div className="controls">
                    <input type="text" className="input" placeholder="Email"
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}
                           required={true}
                    />
                  </div>
                </div>
                <div className="field mt-5">
                  <label className="label">Password</label>
                  <div className="controls">
                    <input type="password" className="input" placeholder="*******"
                           value={password}
                           onChange={(e) => setPassword(e.target.value)}
                           required={true}
                    />
                  </div>
                </div>
                <div className="field mt-5">
                  <label className="label">Confirm Password</label>
                  <div className="controls">
                    <input type="password" className="input" placeholder="*******"
                           value={confPassword}
                           onChange={(e) => setConfPassword(e.target.value)}
                           required={true}
                    />
                  </div>
                </div>
                <div className="field mt-5">
                  <button className="button is-success is-fullwidth">Register</button>
                </div>
                <p className="has-text-centered mt-3" >Already have an account? <a href="/">Login</a></p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Register