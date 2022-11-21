import { Link } from 'react-router-dom'
import { useLogout } from "../hooks/useLogout"
import { useAuthContext } from "../hooks/useAuthContext"

const Navbar = () => {
  const { logout } = useLogout()
  const { user } = useAuthContext()

  const handleClick = () => {
    logout()
  }
  
return (
<header>
  <div className='navbar navbar-light' >
    <div className='container navbar-brand' >
      <Link to='/'>
        <span className='display-5'>Foodtruck Finder</span>
      </Link>
    </div>
    <nav className='navbar navbar-expand-lg navbar-light' >
      {user && (
        <div>
          <span className='email'>{user.email}</span>
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