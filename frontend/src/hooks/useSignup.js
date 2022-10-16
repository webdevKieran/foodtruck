import { useState } from 'react'
import { useAuthContext } from './useAuthContext'

// signup in this hook. send request. if response is Ok, then update authContext with current user

export const useSignup = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const { dispatch } = useAuthContext()

  const signup = async(email, password) => {
    setIsLoading(true)
    setError(null)

    const response = await fetch('/api/user/signup', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({email, password})
    })
    const json = await response.json()

    if(!response.ok) {
      setIsLoading(false)
      setError(json.error)
    }
    if(response.ok) {
      //save user to local storage
      localStorage.setItem('user', JSON.stringify(json))

      //update authContext
      dispatch({type: 'LOGIN', payload: json})

      setIsLoading(false)
    }
  }
  return{ signup, isLoading, error }

}

