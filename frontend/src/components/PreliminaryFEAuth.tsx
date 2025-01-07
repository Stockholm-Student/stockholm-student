import { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'

// just an interface for testing purposes
function PreliminaryFEAuth() {
  const { isAuthenticated } = useAuth0()

  return (
    <div style={{ height: 120, border: '1px solid black', width: 200 }}>
      <h3>Auth Test</h3>
      <div>
        <PreliminaryLogin />
        {isAuthenticated && <PreliminaryAPIFetch />}
      </div>
    </div>
  )
}

// How to fetch from our api
const PreliminaryAPIFetch = () => {
  const [msgText, setMsgText] = useState<null | string>('status')

  const { user, getAccessTokenSilently } = useAuth0()

  const fetchApi = async (secure = false) => {
    try {
      const token = secure ? getAccessTokenSilently() : ''

      setMsgText('loading...')

      fetch(
        `${import.meta.env.VITE_API_DOMAIN}/${secure ? 'secure' : 'public'}/events`,
        secure ? { headers: { Authorization: `Bearer ${await token}` } } : {}
      )
        .then((data) => data.json())
        .then((json) => {
          console.log(json)
          setMsgText('success')
        })
        .catch((err) => setMsgText(err.message))
    } catch (error) {
      console.error(error)
    }
  }

  if (user) {
    console.log('user: ', user)
  }

  return (
    <>
      {!!user && (
        <div
          style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-around',
          }}
        >
          <button
            style={{ border: '1px solid black', padding: 3 }}
            onClick={() => fetchApi()}
          >
            fetch public
          </button>
          <button
            style={{ border: '1px solid black', padding: 3 }}
            onClick={() => fetchApi(true)}
          >
            fetch secure
          </button>
        </div>
      )}
      <p>{msgText}</p>
    </>
  )
}

// How to call log in/sign up
// Template for requiring additional data from users at sign up:
//    https://developer.auth0.com/resources/templates/forms/onboarding
const PreliminaryLogin = () => {
  const { loginWithRedirect, isAuthenticated, isLoading, logout } = useAuth0()

  if (isLoading) return <></>

  return isAuthenticated ? (
    <button
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
    >
      Log Out
    </button>
  ) : (
    <button onClick={() => loginWithRedirect()}>Log In</button>
  )
}

export default PreliminaryFEAuth
