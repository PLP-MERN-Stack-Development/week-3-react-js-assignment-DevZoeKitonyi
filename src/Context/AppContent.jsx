import React, { createContext, useContext, useReducer } from 'react'

// Initial state
const initialState = {
  user: null,
  theme: 'light',
  notifications: []
}

// Action types
const actionTypes = {
  SET_USER: 'SET_USER',
  SET_THEME: 'SET_THEME',
  ADD_NOTIFICATION: 'ADD_NOTIFICATION',
  REMOVE_NOTIFICATION: 'REMOVE_NOTIFICATION'
}

// Reducer function
const appReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.payload
      }
    case actionTypes.SET_THEME:
      return {
        ...state,
        theme: action.payload
      }
    case actionTypes.ADD_NOTIFICATION:
      return {
        ...state,
        notifications: [...state.notifications, action.payload]
      }
    case actionTypes.REMOVE_NOTIFICATION:
      return {
        ...state,
        notifications: state.notifications.filter(
          notification => notification.id !== action.payload
        )
      }
    default:
      return state
  }
}

// Create context
const AppContext = createContext()

// Context provider component
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState)

  // Action creators
  const setUser = (user) => {
    dispatch({ type: actionTypes.SET_USER, payload: user })
  }

  const setTheme = (theme) => {
    dispatch({ type: actionTypes.SET_THEME, payload: theme })
  }

  const addNotification = (notification) => {
    const id = Date.now()
    dispatch({ 
      type: actionTypes.ADD_NOTIFICATION, 
      payload: { ...notification, id } 
    })
  }

  const removeNotification = (id) => {
    dispatch({ type: actionTypes.REMOVE_NOTIFICATION, payload: id })
  }

  const value = {
    ...state,
    setUser,
    setTheme,
    addNotification,
    removeNotification
  }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

// Custom hook to use the context
export const useAppContext = () => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider')
  }
  return context
}

export default AppContext