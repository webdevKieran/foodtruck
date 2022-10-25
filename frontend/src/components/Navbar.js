import { Link } from 'react-router-dom'

const Navbar = () => {

  
return (
<header>
 
  <div className='navbar navbar-light bg-light'>
    <div className='container'>
    <Link to='/'>
      <h1 className='display-5'>Foodtruck Finder</h1>
    </Link>
    </div>
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='navbar-nav'>
        <Link className='btn btn-outline-primary me-2' to='/Login'>Log In</Link>
      </div>
      <div className='nav-item'>
        <Link className='btn btn-outline-success me-2' to='/Signup'>Sign Up</Link>
      </div>
    </nav>
    
  </div>
</header>
  )
}

export default Navbar