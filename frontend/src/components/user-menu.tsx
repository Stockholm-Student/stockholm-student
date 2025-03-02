import {
  CalendarHeartIcon,
  CheckIcon,
  LaptopIcon,
  LayoutDashboardIcon,
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
import { Dispatch, SetStateAction } from 'react'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'

interface NavMenuProps {
  isHomePage: boolean
  scrollY: number
  height: number
  setAuthDialogOpen: Dispatch<SetStateAction<boolean>>
  setLogin: Dispatch<SetStateAction<boolean>>
}
//TODO: Add a login form link, add link to profile page, replace Temporary state logedIn with real state provider when authentication available

export function UserMenu({
  isHomePage,
  scrollY,
  height,
  setAuthDialogOpen,
  setLogin,
}: NavMenuProps) {
  const { setTheme, theme } = useTheme()

  const isAuthenticated = true
  const { sm } = useBreakpoints()

  const user = {
    name: 'John Doe mc guiver',
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
                  {/* Select first Letter in uppercase from username. If username has at least one space take the first letter of the last part aswell. Examples: Carl Powers --> CP, John doe mc Guiver --> JG */}
                  {(() => {
                    const nameParts = user.name.split(' ')
                    if (nameParts.length === 1) {
                      return nameParts[0].charAt(0).toUpperCase()
                    }
                    return (
                      nameParts[0].charAt(0).toUpperCase() +
                      nameParts[nameParts.length - 1].charAt(0).toUpperCase()
                    )
                  })()}
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
            <Link to="/dashboard">
              <DropdownMenuItem>
                <LayoutDashboardIcon />
                <span>Dashboard</span>
              </DropdownMenuItem>
            </Link>
            <DropdownMenuItem>
              <UserIcon />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <CalendarHeartIcon />
              <span>My Events</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
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
            <DropdownMenuItem>
              <LogOutIcon />
              <span>Log out</span>
            </DropdownMenuItem>
          ) : (
            <>
              <DropdownMenuGroup>
                <DropdownMenuItem
                  onClick={() => {
                    setAuthDialogOpen(true)
                    setLogin(false)
                  }}
                >
                  <UserPlusIcon />
                  <span>Sign up</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => {
                    setAuthDialogOpen(true)
                    setLogin(true)
                  }}
                >
                  <LogInIcon />
                  <span>Log in</span>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </>
          )}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
