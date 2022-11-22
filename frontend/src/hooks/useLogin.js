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

  // ----> this section was added, could be removed if not working.
      // get the local id into local storage for later use
          const getLocalId = async (req, res) => {
            const user_id = req.user._id
            const local_id = await response.json()

            if(!response.ok) {
              setIsLoading(false)
              setError(local_id.error)
              console.log(local_id.error)
          }
          if(response.ok) {
            //save user to local storage to keep signed in
            localStorage.setItem('user_id', JSON.stringify(local_id))
            console.log('local id: ',local_id)
        
        }
      }
     // ----> 
  }

    // send back user login state, loading state and error state to app
    return{ login, isLoading, error }
  
  }
  
  