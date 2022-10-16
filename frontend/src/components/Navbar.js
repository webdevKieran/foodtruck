import { Link } from 'react-router-dom'

const Navbar = () => {

  
return (
<header>
  <div className="container">
    <Link to='/'>
      <h3>Foodtruck Finder</h3>
    </Link>
    <nav>
      <div>
        <Link to='/Login'>Log In</Link>
      </div>
      <div>
        <Link to='/Signup'>Sign Up</Link>
      </div>
    </nav>
  </div>
</header>
  )
}

export default Navbar