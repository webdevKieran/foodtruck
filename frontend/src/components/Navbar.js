import React from 'react'
import { Link } from 'react-router-dom'
import { useLogout } from "../hooks/useLogout"
import { useAuthContext } from "../hooks/useAuthContext"
import logo512 from '../img/logo512.png'

const Navbar = () => {
  const { logout } = useLogout()
  const { user } = useAuthContext()

  const handleClick = () => {
    logout()
  }
  
return (
<header>
  <div className='navbar navbar-light' >
    <div>
    <img src={logo512} alt="Logo" width="100" height="100"/>
      <Link to='/'>
     
        <span className='display-5'>Foodtruck Finder</span>
      </Link>
    </div>
    <nav className='navbar navbar-expand-sm navbar-light' >
      {user && (
        <div>
          <Link to='/Login'>
            <span className='email'>{user.email}</span>
          </Link>
          <button className='btn btn-outline-danger me-2' onClick={handleClick}>Logout</button>
        </div>
      )}

      {!user && 
        (      
        <div className='navbar-nav'>
          <Link className='btn btn-primary me-2' to='/Login'>Log In</Link>
   

          <Link className='btn btn-warning me-2' to='/Signup'>Sign Up</Link>
        </div>
        )
      }
    </nav>
  </div>
</header>
  )
}

export default Navbar