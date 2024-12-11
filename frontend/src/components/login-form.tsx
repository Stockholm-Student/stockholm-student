import { Button } from '@/components/ui/button'
import { SetStateAction, useEffect, useState } from 'react'

import { account, ID } from '@/lib/appwrite'
import { Models } from 'appwrite'
import { EyeIcon, EyeOffIcon } from 'lucide-react'
import { DialogFooter } from './ui/dialog'
import { Input } from './ui/input'
import { Label } from './ui/label'

interface LoginFormProps {
  isLogin: boolean //saves if it is log in or sign up form to show
  setIsLogin: React.Dispatch<SetStateAction<boolean>>
}

export default function LoginForm({ isLogin, setIsLogin }: LoginFormProps) {
  const [loggedInUser, setLoggedInUser] = useState<Models.Preferences | null>(
    null
  ) // !
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [infoText, setInfoText] = useState<string | null>(null)
  const [showPwd, setShowPwd] = useState<boolean>(false)

  // Checking if session is already active
  useEffect(() => {
    account
      .get()
      .then((val) => {
        setLoggedInUser(val)
      })
      .catch(() => console.log('no session active'))
  }, [])
  // Just debug
  useEffect(() => {
    console.log('Logged in user: ', loggedInUser)
  }, [loggedInUser])

  async function login(email: string, password: string) {
    account
      .createEmailPasswordSession(email, password)
      .then(async () => setLoggedInUser(await account.get()))
      .catch((err) => setInfoText(err.message))
  }

  const registerNewUser = async (
    email: string,
    password: string,
    name: string
  ) => {
    account
      .create(ID.unique(), email, password, name)
      .then(async () => login(email, password))
      .catch((err) => setInfoText(err.message))
  }

  const logout = async () => {
    account
      .deleteSession('current')
      .then(() => setLoggedInUser(null))
      .catch((err) => setInfoText(err.message))
  }

  const handleSubmit = () => {
    if (isLogin) {
      login(email, password)
    } else {
      registerNewUser(email, password, name)
    }
  }

  if (loggedInUser != null) {
    return <Button onClick={logout}>log out</Button>
  }

  return (
    <div className="mt-4">
      {/** Email */}
      <div className="mb-4 grid grid-cols-4 items-center gap-4">
        <Label htmlFor="email" className="text-right">
          Email
        </Label>
        <Input
          id="email"
          className="col-span-3"
          type="email"
          onChange={({ currentTarget }) => setEmail(currentTarget.value)}
          value={email}
        />
      </div>
      {/* Username */}
      {isLogin && (
        <div className="mb-4 grid grid-cols-4 items-center gap-4">
          <Label htmlFor="username" className="text-right">
            Username
          </Label>
          <Input
            id="username"
            className="col-span-3"
            type="text"
            onChange={({ currentTarget }) => setName(currentTarget.value)}
            value={name}
          />
        </div>
      )}
      {/** Pwd */}
      <div className="mb-4 grid grid-cols-4 items-center gap-4">
        <Label htmlFor="pwd" className="text-right">
          Password
        </Label>
        <div className="row col-span-3 flex">
          <Input
            id="pwd"
            type={showPwd ? 'text' : 'password'}
            className="mr-2"
            onChange={({ currentTarget }) => setPassword(currentTarget.value)}
            value={password}
          />
          <Button
            variant={'outline'}
            onClick={() => setShowPwd((prev) => !prev)}
          >
            {showPwd ? <EyeIcon /> : <EyeOffIcon />}
          </Button>
        </div>
      </div>

      {infoText != null && <div>{infoText}</div>}

      <DialogFooter className="mt-6 flex flex-wrap gap-4">
        <Button type="submit" onClick={handleSubmit} className="w-full">
          {isLogin ? 'Log in' : 'Sign up'}
        </Button>
        <Button
          className="w-full"
          variant={'ghost'}
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin
            ? 'Don`t have an account? Sign up'
            : 'Already have an account? Log in'}
        </Button>
      </DialogFooter>
    </div>
  )
}
