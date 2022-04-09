import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar is-light" role="navigation" aria-label="main navigation">
      <div className="container">
        <div className="navbar-brand">
          <a href="https:/bulma.io" className="navbar-item">
            <img src="https://bulma.io/images/bulma-logo.png" alt="logo"/>
          </a>

          <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item">
              Home
            </a>
          </div>

          <div className="navbar-item has-dropdown is-hoverable ">
            <a className="navbar-item">
              About
            </a>
            <a className="navbar-item">
              Contact
            </a>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="button">
                <div className="button is-light">
                  Log Out
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>

  )
}

export default Navbar