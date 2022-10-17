// placeholder for login page
import { useState } from 'react'
import DetailsForm from '../components/DetailsForm'
import { useLogin } from '../hooks/useLogin'
import { useAuthContext } from '../hooks/useAuthContext'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] =  useState('')
  const { login, error, isLoading } = useLogin()

  const { user } = useAuthContext()

  const handleSubmit = async (e) =>{
    e.preventDefault()

    await login(email, password)
  }

   /* this section should hide the details until state changed to user logged in
      I am doing this by loading the component if a user is present*/

  return (
    <div>
    {user && (
       <div><h2>Welcome {user.email}</h2>
       <DetailsForm />
       </div>
     )
    }
    
      {!user && (
    <div className='container'>
      <form className='login' onSubmit={handleSubmit}>
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
        {error && <div className="error">{error}</div>}
      </form>
    </div>
    )}
    </div>
  )

}

  export default Login