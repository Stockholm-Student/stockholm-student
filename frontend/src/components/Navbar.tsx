// components/Navbar.tsx
import { MenuIcon, UserIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/logo/horizontal-logo.svg'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Button } from './ui/button'

const Navbar = () => {
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  const [scrollY, setScrollY] = useState(0)

  const height = screen.height - 200

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed left-0 right-0 z-50 p-4 text-foreground backdrop-blur-md transition-all ${scrollY < height && isHomePage && 'text-white backdrop-blur-none'} ${scrollY == 0 ? 'top-8' : 'top-0'} `}
    >
      {/* Table with all nva links to make all items have same width regardless of content (except logo) */}
      <table className="mx-auto w-full max-w-screen-xl text-center">
        <tr>
          <td className="w-1/6">
            <Link
              to="/events"
              className={`font-serif text-xl font-bold transition-all hover:underline ${
                location.pathname === '/events' && 'underline'
              }`}
            >
              Events
            </Link>
          </td>
          <td className="w-1/6">
            <Link
              to="/community"
              className={`font-serif text-xl font-bold transition-all hover:underline ${
                location.pathname === '/community' && 'underline'
              }`}
            >
              Community
            </Link>
          </td>
          <td className="w-2/6">
            <Link to="/" className="">
              <img
                src={logo}
                alt="STST Logo"
                className={`${
                  isHomePage && scrollY == 0 ? 'h-24' : 'h-16'
                } ${isHomePage && scrollY < height && 'invert'} mx-auto w-auto px-4 transition-all duration-300 hover:scale-105`}
              />
            </Link>
          </td>
          <td className="w-1/6">
            <Link
              to="/wiki"
              className={`font-serif text-xl font-bold transition-all hover:underline${
                location.pathname === '/wiki' && 'underline'
              }`}
            >
              Wiki
            </Link>
          </td>
          <td className="w-1/6">
            <Link
              to="/more"
              className={`font-serif text-xl font-bold transition-all hover:underline${
                location.pathname === '/more' && 'underline'
              }`}
            >
              More
            </Link>
          </td>
          {/* <td className="w-1/6">
            <div className="flex w-full justify-center">
              <div
                className={`flex w-fit items-center justify-center rounded-full border p-1 ${isHomePage && scrollY < height && 'text-white'} `}
              >
                <Button variant={'ghost'} className="rounded-full pr-0">
                  <MenuIcon></MenuIcon>
                  <Avatar>
                    <AvatarImage src="" />
                    <AvatarFallback><UserIcon className='text-black'></UserIcon></AvatarFallback>
                  </Avatar>{' '}
                </Button>
              </div>
            </div>
          </td> */}
        </tr>
        <div
          className={`fixed ${scrollY == 0 ? 'right-12 top-12' : 'right-8 top-8'}`}
        >
          <div
            className={`flex w-fit items-center justify-center rounded-full border p-1 ${isHomePage && scrollY < height && 'text-white'} `}
          >
            <Button variant={'ghost'} className="rounded-full pr-0 hover:scale-100">
              <MenuIcon></MenuIcon>
              <Avatar >
                <AvatarImage src="" />
                <AvatarFallback>
                  <UserIcon className="text-black "></UserIcon>
                </AvatarFallback>
              </Avatar>{' '}
            </Button>
            {/* <ModeToggle></ModeToggle> */}
          </div>
        </div>
      </table>
    </nav>
  )
}

export default Navbar
