import React from 'react'
import axios from "axios"
import {useNavigate} from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()

  const Logout = async () => {
    try {
      await axios.delete('http://localhost:5000/logout')
      navigate('/')
    }catch (e) {
      console.log(e)
    }
  }

  return (
    <nav className="navbar is-light" role="navigation" aria-label="main navigation">
      <div className="container">
        <div className="navbar-brand">
          <a href="https:/bulma.io" className="navbar-item">
            <img src="https://bulma.io/images/bulma-logo.png" alt="logo"/>
          </a>

          <a href="/" role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a href="/" className="navbar-item">
              Home
            </a>
          </div>

          <div className="navbar-item has-dropdown is-hoverable ">
            <a href="/" className="navbar-item">
              About
            </a>
            <a href="/" className="navbar-item">
              Contact
            </a>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <button onClick={Logout} className="button is-light">
                  Log Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>

  )
}

export default Navbar