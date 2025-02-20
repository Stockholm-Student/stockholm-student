import { User } from '@/types/interfaces'
import PropTypes from 'prop-types'
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'

interface AuthContextType {
  token: string | boolean | null
  setToken: (newToken: string | boolean | null) => void
  user: User | null
  setUser: (newUser: User | null) => void
  getFirstUserNameLetter: () => string
}

const AuthContext = createContext<AuthContextType>({
  token: null,
  setToken: () => {},
  user: null,
  setUser: () => {},
  getFirstUserNameLetter: () => '',
})

export const AuthenticationProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  //State to hold the authentication token, allows to manullay navigate to pages that require authentication
  const [token, setToken_] = useState<string | boolean | null>(
    localStorage.getItem('token')
  )
  const [user, setUser_] = useState<User | null>(null)

  // Function to set the authentication token
  const setToken = useCallback((newToken: string | boolean | null) => {
    setToken_(newToken)
  }, [])

  // Function to set the user data
  const setUser = useCallback((newUser: User | null) => {
    setUser_(newUser)
  }, [])

  // Function to get the first letter of the user's first name
  const getFirstUserNameLetter = useCallback(() => {
    return user ? user.userName.charAt(0).toUpperCase() : ''
  }, [user])

  // Function to get the user data
  const handleGetUser = useCallback(async () => {
    try {
      const response = await fetch(
        import.meta.env.VITE_BACKEND_URL + '/api/user/get/',
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      )
      const data = await response.json()
      setToken(true)
      setUser(data.user)
    } catch (error) {
      setToken(false)
      console.error(error)
    }
  }, [token, setToken, setUser])

  // Effect to handle the token and user data
  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token.toString())
      handleGetUser()
    } else {
      localStorage.removeItem('token')
      setToken_(null)
      setUser_(null)
    }
  }, [token, handleGetUser])

  useEffect(() => {
    if (token) handleGetUser()
  }, [token, handleGetUser])

  // Memoized value of the authentication context
  const contextValue = useMemo(
    () => ({
      token,
      setToken,
      user,
      setUser,
      getFirstUserNameLetter,
    }),
    [token, user, getFirstUserNameLetter, setToken, setUser]
  )

  // Provide the authentication context to the children components
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}

export default AuthenticationProvider

AuthenticationProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
