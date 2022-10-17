// placeholder for login page
import { useState } from 'react'
import DetailsForm from '../components/DetailsForm'
import { useLogin } from '../hooks/useLogin'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] =  useState('')
  const { login, error, isLoading } = useLogin()

  const handleSubmit = async (e) =>{
    e.preventDefault()

    await login(email, password)
  }

  return (
    <div>
      <form className='login' onSubmit={handleSubmit} hidden={login}>
        <h3>Log in</h3>
        <label>Email:</label>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button disabled={isLoading} >Log in</button>
        {error&&<div className="error">{error}</div>}
      </form>
      <br />
      {/* this section should hide the details until state changed to user logged in
      I think the best way is to create a handler for the div with a value hidden if handler is true*/}
      <div className='container'>
      <DetailsForm />
      </div>
    </div>
  )
}

  export default Login