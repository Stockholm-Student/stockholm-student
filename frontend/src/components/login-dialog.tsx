import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useEffect, useState } from 'react'


import { account, ID, } from '@/lib/appwrite'
import { Models } from 'appwrite'






export default function LogInDialog() {

  const [isLogin, setIsLogin] = useState<boolean>(true); 
  const [loggedInUser, setLoggedInUser] = useState<Models.Preferences | null>(null); // !
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [infoText, setInfoText] = useState<string | null>(null)




  useEffect(() => {
    account.get()
      .then(val => {
        setLoggedInUser(val)
      })
      .catch(() => console.log("no session active"))
  }, [])

  useEffect(() => {
    console.log('Logged in user: ', loggedInUser)
  }, [loggedInUser])




  async function login(email: string, password: string) {
    account.createEmailPasswordSession(email, password)
      .then(async () => setLoggedInUser(await account.get()))
      .catch(err => setInfoText(err.message)) 
  }


  const registerNewUser = async (email: string, password: string, name: string) => {
    await account.create(ID.unique(), email, password, name);
    login(email, password);
  }


  const logout = async () => {
    account.deleteSession('current').then(() => setLoggedInUser(null))
  }


  const handleSubmit = () => {
    isLogin 
      ? login(email, password)
      : registerNewUser(email, password, name)
  }




  if (loggedInUser != null){
    return (<Button onClick={logout}>logOut</Button>)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Login</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">

        <DialogHeader>
          <DialogTitle>{isLogin ? "Log In": "Sign Up"}</DialogTitle>
          <DialogDescription>Placeholder.</DialogDescription>
        </DialogHeader>

          {/** Email */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input
              id="email"
              // defaultValue="@abs.."
              className="col-span-3"
              type="email"
              onChange={({currentTarget}) => setEmail(currentTarget.value)}
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
              //defaultValue=""
              className="col-span-3"
              type='password'
              onChange={({currentTarget}) => setPassword(currentTarget.value)}
              value={password}
            />
          </div>

          {!isLogin && (
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Username
              </Label>
              <Input
                id="username"
                //defaultValue="username"
                className="col-span-3"
                type="text"
                onChange={({currentTarget}) => setName(currentTarget.value)}
                value={name}
              />
            </div>
          )}

        <DialogFooter>
          {infoText != null && <div>{infoText}</div>}

          <button onClick={()=> setIsLogin(prev => !prev)}>{isLogin ? "sign up" : "log in" }</button>

          <Button 
            type="submit" 
            //onSubmit={handleSubmit} 
            onClick={handleSubmit}>
              {isLogin ? "Log in": "Sign up" }
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
