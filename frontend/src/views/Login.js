// placeholder for login page
import { useState, useEffect } from 'react'
import DetailsForm from '../components/DetailsForm'
import { useLogin } from '../hooks/useLogin'
import { useAuthContext } from "../hooks/useAuthContext"

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] =  useState('')
  const { login, error, isLoading } = useLogin()
  const { user } = useAuthContext()
  const [details, setDetails] = useState('[]')

  const handleSubmit = async (e) =>{
    e.preventDefault()

    await login(email, password)
    console.log("email: ",email,user.id)
    
  }
/* get the remaining details of the logged in user */
/*

  where email= the logged in user, get _id

  useEffect (() => {
    const fetchDetails = async () => {
      const response = await fetch('/api/user')
      const json = await response.json([])
      
      if(response.ok) {
         setDetails(json)
      }
    }
      fetchDetails()
    }, [])
*/

  return (
    <div className="login">
    <div className='container formBg'>
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
      <br />
      {/* this section should hide the details until state changed to user logged in */}
      {user && <div className='container'>
      <DetailsForm />
      </div>
      }
    </div>
    </div>
  )
}

  export default Login