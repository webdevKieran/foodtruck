// placeholder for login page
import { useState } from 'react'
import DetailsForm from '../components/DetailsForm'
import { useLogin } from '../hooks/useLogin'
import { useAuthContext } from "../hooks/useAuthContext"

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
      {/* this section should hide the details until state changed to user logged in
      I think the best way is to create a handler for the div with a value hidden if handler is true*/}
      {user && <div className='container'>
      <DetailsForm />
      </div>
      }
    </div>
  )
}

  export default Login