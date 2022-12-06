import React,{ createContext, useReducer } from 'react'

export const DetailsContext = createContext()

export const detailsReducer = (state, action) => {
  switch (action.type) {
    case 'SET_DETAILS': 
    return {
      details: action.payload
    }
    case 'CREATE_DETAILS':
      return {
        details: [action.payload, ...state.details]
    }
    case 'DELETE_DETAILS':
      return {
        details: state.details.filter((w) => w._id !== action.payload._id)
      }

    default:
      return state
  }
}

export const DetailsContextProvider= ({ children }) => {
  const [state, dispatch] = useReducer(detailsReducer, {
    details: null
  })

  return (
    <DetailsContext.Provider value={{...state, dispatch}}>
      { children}
    </DetailsContext.Provider>
  )
}