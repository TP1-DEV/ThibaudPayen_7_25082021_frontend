import React, {useState, createContext} from 'react'

export const UserContext = createContext()

export const UserProvider = ({children}) => {
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)

  return <UserContext.Provider value={{userCtx: [user, setUser], tokenCtx: [token, setToken]}}>{children}</UserContext.Provider>
}
