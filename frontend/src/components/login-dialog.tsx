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
import { useState } from 'react'


import { account, ID, } from '@/lib/appwrite'
import { Account } from 'appwrite'






// interface IUsers {

//   ObjectId: String,
//   email: String,
//   hashedPwd: String,
//   firstName: String, 
//   LastName: String 
//   Stnng 
//   university 
//   Suing 
//   Date 
//   Interests 
//   Array 
//   anencleeSsents 
//   Array 
// } 
// create:Eve. 

// wr e 
// Cr...Ben& 
// Events 
// Partners °Medici Id Notifications String name Obreolle Stnng °Neale Unn0 String ,Pd Stnng Stn^. tele MOS contact Stnng Array events Boolean Date PartnershipSted Object data Boolean rsActee create. 
// MOUS ObjectId creatorie WikiANcles String suing descent. Dispute je Date date String Sting SMng content Stnng location String  awry Sting cabers, CONolld euMorld maxAtlendees Array cootributors Amy Images Date Boolean create:Mt IsPublisned 
// Id 

// authorld 
// Eventrittenclees 
// Ohjeetle 
// °Neale 
// evened 
// Ofiedle 
// userld 
// Story 
// status 
// DaN 
// regsteredAt 
// SwAttereled 














export default function LogInDialog() {

  const [isLogin, setIsLogin] = useState<boolean>(true); 


  const [loggedInUser, setLoggedInUser] = useState<any>(null); // !
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');




  async function login(email: string, password: string) {
    await account.createEmailPasswordSession(email, password);
    setLoggedInUser(await account.get());
  }


  const registerNewUser = async (email: string, password: string, name: string) => {
    await account.create(ID.unique(), email, password, name);
    login(email, password);
  }


  const handleSubmit = () => {

    // console.log("sdf")

    // console.log("hey",  { email, password, name })

    isLogin 
      ? login(email, password)
      : registerNewUser(email, password, name)
  }


  if (loggedInUser != null){
    return (
      <div>
        You're already logged in
      </div>
    )
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
