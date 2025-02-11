import { useState, FormEvent } from 'react';
// import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';




export const AuthTest = () =>  {
  const [token, setToken] = useState<null | string>(null);

  return (
    <div style={{border: "1px solid black"}}>
      {token !== null ? (
        <LoggedInView setToken={setToken} token={token}/>
      ) : (
        <LoggedOutView setToken={setToken}/>
      )}
    </div>
  )
}




const LoggedInView = ({setToken, token} : {
  setToken: React.Dispatch<React.SetStateAction<string | null>>,
  token: null | string
}) => {

  const [ infoMessage, setInfoMessage ] = useState<string>("")

  return (
    <div>      
      <h2>logged in!</h2>
      <p>{`token: ${token}`}</p>
      <p>{infoMessage}</p>

      <button style={{ border: "1px solid black" }} onClick={() => {setToken(null)}}>Log out</button>
      {/* <button style={{ border: "1px solid black" }} onClick={() => {setToken(null)}}>Test api access by role</button> */}
    </div>
  )
}




interface ISetToken {
  setToken: React.Dispatch<React.SetStateAction<string | null>>
}
const LoggedOutView = ({setToken}: ISetToken) => {
  const [isSignUp, setIsSignUp] = useState<boolean>(false)

  return (
    <div style={{border: "1px solid black"}}>
      <h2>{isSignUp ? "Sign up" : "Login"}</h2>

      {isSignUp ? (<SignUp setToken={setToken}/>) : (<LocalLogIn setToken={setToken}/>)}

      <button onClick={() => setIsSignUp(prev => !prev)}>{isSignUp ? "login instead" : "signup instead"}</button>
    </div>
  );
}




interface LoginFormData {
  email: string;
  password: string;
}
const LocalLogIn = ({setToken}: ISetToken) => {
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: '',
  });

  const [error, setError] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    try {
      console.log('Login attempt with:', formData);

      axios
        .post(`${import.meta.env.VITE_API_DOMAIN}/auth/local/login`, {
          email: formData.email,
          hashedPwd: formData.password
        })
        .then((res) => {
          console.log(res.data.accessToken)
          setToken(res.data.accessToken)
        })
      // Here you would typically send the login data to your backend
      // For example:
      // const response = await api.login(formData);
      
      // If login is successful, you might redirect the user or update app state
      // For now, we'll just log a success message
      console.log('Login successful!');
    } catch (err) {
      setError('Login failed. Please check your credentials.');
      console.error('Login error:', err);
    }
  };
  return (
    <form onSubmit={handleSubmit} style={{border: "1px solid black", padding: 4, marginTop: 4, marginBottom: 4}}>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <div style={{border: "1px solid black"}}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div style={{border: "1px solid black"}}>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit" style={{border: "1px solid black"}}>Log In</button>
    </form>
  )
}




interface FormData {
  email: string;
  password: string;
  userName: string;
  bio: string;
  country: string;
  university: string;
}

const SignUp = ({setToken}: ISetToken) => {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
    userName: '',
    bio: '',
    country: '',
    university: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);

    axios
      .post(`${import.meta.env.VITE_API_DOMAIN}/auth/local/signup`, 
        formData
      )
      .then((res) => {
        console.log(res.data.accessToken)
        setToken(res.data.accessToken)
      })
  };

  return (
    <div>
      <form onSubmit={handleSubmit} style={{ border: "1px solid black", padding: 4, marginTop: 4, marginBottom: 4}}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="userName">Username:</label>
          <input
            type="text"
            id="userName"
            name="userName"
            value={formData.userName}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="bio">Bio:</label>
          <textarea
            id="bio"
            name="bio"
            value={formData.bio}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="country">Country:</label>
          <input
            type="text"
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="university">University:</label>
          <input
            type="text"
            id="university"
            name="university"
            value={formData.university}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Submit</button>
      </form>

    </div>
  );
};




/*
    const [ user, setUser ] = useState<any>([]);
    const [ profile, setProfile ] = useState<any>([]);

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => setUser(codeResponse),
        onError: (error) => console.log('Login Failed:', error)
    });

    useEffect(
        () => {
            if (user) {
                axios
                    .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                        headers: {
                            Authorization: `Bearer ${user.access_token}`,
                            Accept: 'application/json'
                        }
                    })
                    .then((res) => {
                        setProfile(res.data);
                    })
                    .catch((err) => console.log(err));
            }
        },
        [ user ]
    );

    // log out function to log the user out of google and set the profile array to null
    const logOut = () => {
        googleLogout();
        setProfile(null);
    };

    return (
      <div>
        <h2>React Google Login</h2>
        <br />
        <br />
        {profile ? (
          <div>
            <img src={profile.picture} alt="user image" />
            <h3>User Logged in</h3>
            <p>Name: {profile.name}</p>
            <p>Email Address: {profile.email}</p>
            <br />
            <br />
            <button onClick={logOut}>Log out</button>
          </div>
        ) : (
          <button onClick={() => login()}>Sign in with Google 🚀 </button>
        )}
      </div>
    );


*/