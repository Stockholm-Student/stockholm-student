import { Button } from '@/components/ui/button'
import { SetStateAction, useEffect, useState } from 'react'

import { account, ID } from '@/lib/appwrite'
import { Models } from 'appwrite'
import { ResponsiveDialog } from './responsive-dialog'
import { DialogFooter } from './ui/dialog'
import { Input } from './ui/input'
import { Label } from './ui/label'

interface LoginFormProps {
  isOpen: boolean
  setIsOpen: React.Dispatch<SetStateAction<boolean>>
}

export default function LoginForm({ isOpen, setIsOpen }: LoginFormProps) {
  const [isLogin, setIsLogin] = useState<boolean>(true)
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
    return <Button onClick={logout}>loguut</Button>
  }

  return (
    <ResponsiveDialog isOpen={isOpen} setIsOpen={setIsOpen} title="Log in">
      {/** Email */}
      <div className="grid grid-cols-4 items-center gap-4">
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
      {/** Pwd */}
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="pwd" className="text-right">
          Password
        </Label>
        <Input
          id="pwd"
          className="col-span-3"
          type={showPwd ? 'text' : 'password'}
          onChange={({ currentTarget }) => setPassword(currentTarget.value)}
          value={password}
        />
        <button onClick={() => setShowPwd((prev) => !prev)}>
          {showPwd ? 'Hide pwd' : 'Show pwd'}
        </button>
      </div>
      {!isLogin && (
        <div className="grid grid-cols-4 items-center gap-4">
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
      {infoText != null && <div>{infoText}</div>}
      <DialogFooter>
        <button onClick={() => setIsLogin((prev) => !prev)}>
          {isLogin ? 'sign up' : 'log in'}
        </button>
        <Button type="submit" onClick={handleSubmit}>
          {isLogin ? 'Log in' : 'Sign up'}
        </Button>
      </DialogFooter>
    </ResponsiveDialog>
  )
}
