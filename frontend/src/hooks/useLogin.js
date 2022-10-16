import { useState } from 'react'
import { useAuthContext } from './useAuthContext'


export const useLogin = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useAuthContext()
  
    const login = async(email, password) => {
      setIsLoading(true)
      setError(null)
  // send creds to the database
      const response = await fetch('/api/user/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email, password})
      })

      // get response fro the db and compar
      const json = await response.json()
  
      if(!response.ok) {
        setIsLoading(false)
        setError(json.error)
        console.log(json.error)
      }
      if(response.ok) {
        //save user to local storage to keep signed in
        localStorage.setItem('user', JSON.stringify(json))
  
        //update authContext to logged in state
        dispatch({type: 'LOGIN', payload: json})
  
        setIsLoading(false)
      }
    }

    // send back user login state, loading state and error state to app
    return{ login, isLoading, error }
  
  }
  
  