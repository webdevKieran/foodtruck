// placeholder for login page
import { useState, useEffect } from 'react'
import DetailsForm from '../components/DetailsForm'
import { useLogin } from '../hooks/useLogin'
import { useAuthContext } from "../hooks/useAuthContext"
import unsplash from '../img/unsplash.jpg'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] =  useState('')
  const { login, error, isLoading } = useLogin()
  const { user } = useAuthContext()


  const handleSubmit = async (e) =>{
    e.preventDefault()

    await login(email, password)
        
  }


  return (
    <div className="row">
      <span className='col banner'><img className='img-fluid' src={unsplash} alt='guy with foodtruck making crepes' /></span>
    <div className='col formBg'>
      {!user &&
       <form className='login' onSubmit={handleSubmit} hidden={login}>
        <h3>Log in</h3>
        <div className='row mb-2'>
        <label className='form-label'>Email:</label>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        </div>
        <div className='row mb-'>
          <label className='form-label'>Password:</label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          className='form-control'
        />
        </div>
        <br />
        <button className='btn btn-primary btn-lg' disabled={isLoading} >Log in</button>
        {error&&<div className="error">{error}</div>}
      </form>
      }
      <br />
      {/* this section should hide the details until state changed to user logged in */}
      {user && <div className='container'>

      <DetailsForm />

      </div>
      }
    </div>
  <span className='attrib'> Photo by <a href="https://unsplash.com/@arturorey?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Arturo Rey</a> on <a href="https://unsplash.com/s/photos/food-truck?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  </span> 
    </div>
  )
}

  export default Login