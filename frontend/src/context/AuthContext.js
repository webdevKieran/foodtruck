import React,{ createContext, useReducer, useEffect } from 'react'

export const AuthContext = createContext()

// update state of app whether user is logged in or out
export const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { user: action.payload }
    case 'LOGOUT':
      return { user: null }
    default:
      return state
  }
}

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null
  })

  // check is the user logged in already, i.e. exists in local storage
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))

    if (user) {
      dispatch({ type: 'LOGIN', payload: user})
    }
  },[])

  // updated login state info to wrap the whole app
  console.log('AuthContext state: ', state)
  return(
    <AuthContext.Provider value={({...state, dispatch})}>
      { children }
    </AuthContext.Provider>

  )
}