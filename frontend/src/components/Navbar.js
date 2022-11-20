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
  <div className='navbar navbar-light bg-light'>
    <div className='container'>
      <Link to='/'>
        <h1 className='display-5'>Foodtruck Finder</h1>
      </Link>
    </div>
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      {user && (
        <div>
          <span className='email'>{user.email}</span>
          <button className='btn btn-outline-primary me-2' onClick={handleClick}>Logout</button>
        </div>
      )}

      {!user && 
        (      
        <div className='navbar-nav'>
          <Link className='btn btn-outline-primary me-2' to='/Login'>Log In</Link>
   

          <Link className='btn btn-outline-success me-2' to='/Signup'>Sign Up</Link>
        </div>
        )
      }
    </nav>
  </div>
</header>
  )
}

export default Navbar