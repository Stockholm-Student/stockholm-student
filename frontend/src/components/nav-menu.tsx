import {
  CalendarHeartIcon,
  LaptopIcon,
  LogOutIcon,
  MoonIcon,
  SunIcon,
  UserIcon,
  UserPlusIcon,
} from 'lucide-react'

import { useTheme } from '@/components/theme-provider'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import { SetStateAction, useState } from 'react'
import { Button } from './ui/button'

interface NavMenuProps {
  isHomePage: boolean
  scrollY: number
  height: number
  setLoginOpen: React.Dispatch<SetStateAction<boolean>>
  setIsLogin: React.Dispatch<SetStateAction<boolean>>
}
//TODO: Add a login form link, add link to profile page, replace Temporary state logedIn with real state provider when authentication available

export function NavMenu({
  isHomePage,
  scrollY,
  height,
  setLoginOpen: setLoginDialogOpen,
  setIsLogin,
}: NavMenuProps) {
  const { setTheme, theme } = useTheme()

  const [loggedIn, setLoggedIn] = useState<boolean>(false)

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button
          size={'icon'}
          variant={'icon'}
          className={`fixed bg-foreground p-0 hover:bg-foreground/70 ${isHomePage && scrollY < height && '!bg-background'} ${isHomePage && scrollY == 0 ? 'right-12 top-12' : 'right-4 top-3'}`}
        >
          <Avatar>
            <AvatarImage src="" />
            <AvatarFallback>
              <UserIcon
                className={`text-background ${isHomePage && scrollY < height && '!text-foreground'}`}
              ></UserIcon>
            </AvatarFallback>
          </Avatar>{' '}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {loggedIn && (
          <>
            <DropdownMenuItem>
              <UserIcon />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <CalendarHeartIcon />
              <span>My Events</span>
            </DropdownMenuItem>
          </>
        )}
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <SunIcon className={`${theme === 'light' ? 'block' : 'hidden'}`} />
            <MoonIcon className={`${theme === 'dark' ? 'block' : 'hidden'}`} />
            <LaptopIcon
              className={`${theme === 'system' ? 'block' : 'hidden'}`}
            />
            <span>Theme</span>
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              <DropdownMenuItem onClick={() => setTheme('light')}>
                <SunIcon />
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme('dark')}>
                <MoonIcon /> Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme('system')}>
                <LaptopIcon /> System
              </DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {loggedIn ? (
            <DropdownMenuItem onClick={() => setLoggedIn(!loggedIn)}>
              <LogOutIcon />
              <span>Log out</span>
            </DropdownMenuItem>
          ) : (
            <>
              {/* <DropdownMenuItem onClick={() => setLogedIn(!logedIn)}> */}
              <DropdownMenuItem
                onClick={() => {
                  setLoginDialogOpen(true)
                  setIsLogin(false)
                }}
              >
                <UserPlusIcon />
                <span>Sign up</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLoginDialogOpen(!loggedIn)}>
                <LogOutIcon />
                <span>Log in</span>
              </DropdownMenuItem>
            </>
          )}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
