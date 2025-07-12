import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div>
          <header>
                  <a href="/">MORENT</a>
                     <div>
                         <input type="text" />
                     </div>
                    <nav>
                          <NavLink to={'/bylike'}>Like</NavLink>
                          <NavLink to={'/notification'}>notification</NavLink>
                          <NavLink to={'/settings'}>Settings</NavLink>
                          <NavLink to={'/user'}>User</NavLink>
                    </nav>
          </header>
    </div>
  )
}

export default Navbar
