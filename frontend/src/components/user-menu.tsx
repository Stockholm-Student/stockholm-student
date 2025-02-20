import { useAuth0 } from '@auth0/auth0-react'
import {
  CalendarHeartIcon,
  CheckIcon,
  LaptopIcon,
  LogInIcon,
  LogOutIcon,
  MoonIcon,
  SunIcon,
  UserIcon,
  UserPlusIcon,
} from 'lucide-react'

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
import { useBreakpoints } from '@/lib/breakpoints'
import { useTheme } from '@/provider/theme-provider'
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import { Button } from './ui/button'

interface NavMenuProps {
  isHomePage: boolean
  scrollY: number
  height: number
}
//TODO: Add a login form link, add link to profile page, replace Temporary state logedIn with real state provider when authentication available

export function UserMenu({ isHomePage, scrollY, height }: NavMenuProps) {
  const { setTheme, theme } = useTheme()

  const { loginWithRedirect, isAuthenticated, logout } = useAuth0()
  const { sm } = useBreakpoints()

  const user = {
    name: 'John Doe',
    email: '',
    image: '',
  }

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button
          size={'icon'}
          variant={'icon'}
          className={`fixed p-0 transition-all ${isHomePage && scrollY < height ? 'bg-background hover:bg-background/70 dark:bg-foreground dark:hover:bg-foreground/70' : 'bg-foreground hover:bg-foreground/70'} ${isHomePage && sm && scrollY == 0 ? 'right-4 top-16' : 'right-4 top-3'} `}
        >
          <Avatar>
            <AvatarImage src={user.image} />
            <AvatarFallback>
              {isAuthenticated ? (
                <span
                  className={` ${isHomePage && scrollY < height ? 'text-foreground' : 'text-background'} dark:text-background`}
                >
                  {user.name.charAt(0).toUpperCase()}
                </span>
              ) : (
                <UserIcon
                  className={` ${isHomePage && scrollY < height ? 'text-foreground' : 'text-background'} dark:text-background`}
                ></UserIcon>
              )}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {isAuthenticated && (
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
              <DropdownMenuItem
                className={`${theme === 'light' && 'border border-l-foreground'}`}
                onClick={() => setTheme('light')}
              >
                {theme === 'light' ? <CheckIcon /> : <SunIcon />}
                Light
              </DropdownMenuItem>
              <DropdownMenuItem
                className={`${theme === 'dark' && 'border border-l-foreground'}`}
                onClick={() => setTheme('dark')}
              >
                {theme === 'dark' ? <CheckIcon /> : <MoonIcon />}
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem
                className={`${theme === 'system' && 'border border-l-foreground'}`}
                onClick={() => setTheme('system')}
              >
                {theme === 'system' ? <CheckIcon /> : <LaptopIcon />}
                System
              </DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {isAuthenticated ? (
            <DropdownMenuItem
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              <LogOutIcon />
              <span>Log out</span>
            </DropdownMenuItem>
          ) : (
            <>
              <DropdownMenuItem
                onClick={() =>
                  loginWithRedirect({
                    authorizationParams: {
                      screen_hint: 'signup',
                    },
                  })
                }
              >
                <UserPlusIcon />
                <span>Sign up</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => loginWithRedirect()}>
                <LogInIcon />
                <span>Log in</span>
              </DropdownMenuItem>
            </>
          )}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
