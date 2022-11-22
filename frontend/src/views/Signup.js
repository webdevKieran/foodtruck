// placeholder for signup page
import { useState } from 'react'
import { useSignup } from '../hooks/useSignup'
import unsplash from '../img/unsplash.jpg'

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] =  useState('')
  const { signup, error, isLoading } = useSignup()

  const handleSubmit = async (e) =>{
    e.preventDefault()

    await signup(email, password)
  }

    // note the button is disabled if state isLoading is true
return (
  <div className="row">
      <span className='col banner'><img className='img-fluid' src={unsplash} alt='guy with foodtruck'/></span>
      
 <div className="col formBg">
   <div className='container'>
    <form className='signup' onSubmit={handleSubmit}>
      <h3>Sign up</h3>
      <div className='row mb-2'>
      <label className='form-label'>Email:</label>
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      </div>
      <div className='row mb-2'>
      <label className='form-label'>Password:</label>
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      </div>
      <br />
      <button className="btn btn-success btn-lg" disabled={isLoading}>Sign up</button> 
      {error && <div className="error">{error}</div>}
    </form>
   </div>
 </div>
 <span className='attrib'> Photo by <a href="https://unsplash.com/@arturorey?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Arturo Rey</a> on <a href="https://unsplash.com/s/photos/food-truck?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  </span> 
 </div>
  )
}

  export default Signup