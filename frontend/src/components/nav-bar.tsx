// components/Navbar.tsx
import { useBreakpoints } from '@/lib/breakpoints'
import {
  BookOpenIcon,
  CalendarIcon,
  EllipsisIcon,
  HomeIcon,
  MessageCircleIcon,
} from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import MobileNavitem from './MobileNavItem'
import { UserMenu } from './user-menu'

import logo from '@/assets/logo/horizontal-logo.svg'

const Navbar = () => {
  const { sm } = useBreakpoints()
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  const [scrollY, setScrollY] = useState(0)

  const height = screen.height - 200

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    {
      title: 'Events',
      link: '/events',
      icon: <CalendarIcon className="h-6 w-6" />,
    },
    {
      title: 'Community',
      link: '/community',
      icon: <MessageCircleIcon className="h-6 w-6" />,
    },
    { title: 'Home', link: '/', icon: <HomeIcon className="h-6 w-6" /> },
    {
      title: 'Wiki',
      link: '/wiki',
      icon: <BookOpenIcon className="h-6 w-6" />,
    },
    {
      title: 'More',
      link: '/more',
      icon: <EllipsisIcon className="h-6 w-6" />,
    },
  ]

  if (sm) {
    return (
      <>
        <nav
          className={`fixed left-0 right-0 z-50 px-4 py-2 text-foreground backdrop-blur-md transition-all ${scrollY < height && isHomePage && 'text-white backdrop-blur-none'} ${scrollY == 0 ? 'top-8' : 'top-0'} `}
        >
          {/* Table with all nva links to make all items have same width regardless of content (except logo) */}
          <table className="mx-auto w-full max-w-screen-xl text-center">
            <tbody>
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
                      className={`${isHomePage && scrollY == 0 ? 'h-24' : 'h-12'} ${isHomePage && scrollY < height && 'invert'} mx-auto w-auto px-4 transition-all duration-300 hover:scale-105 dark:invert`}
                    />
                  </Link>
                </td>
                <td className="w-1/6">
                  <Link
                    to="/wiki"
                    className={`font-serif text-xl font-bold transition-all hover:underline ${
                      location.pathname === '/wiki' && 'underline'
                    }`}
                  >
                    Wiki
                  </Link>
                </td>
                <td className="w-1/6">
                  <Link
                    to="/more"
                    className={`font-serif text-xl font-bold transition-all hover:underline ${
                      location.pathname === '/more' && 'underline'
                    }`}
                  >
                    More
                  </Link>
                </td>

                <td>
                  <UserMenu
                    isHomePage={isHomePage}
                    scrollY={scrollY}
                    height={height}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </nav>
      </>
    )
  }

  return (
    <>
      <div className="absolute left-0 z-50 flex w-full justify-center px-4 py-2 text-foreground backdrop-blur-md">
        <Link to="/" className="">
          <img
            src={logo}
            alt="STST Logo"
            className={`${isHomePage && scrollY < height && 'invert'} h-12 fill-background dark:invert`}
          />
        </Link>
        <UserMenu isHomePage={isHomePage} scrollY={scrollY} height={height} />
      </div>

      <nav className="fixed bottom-0 z-50 flex w-full justify-between bg-muted px-2 py-4">
        {navItems.map((item) => (
          <div className="flex w-1/5 items-center justify-center">
            <MobileNavitem
              title={item.title}
              link={item.link}
              icon={item.icon}
              active={location.pathname === item.link}
            ></MobileNavitem>
          </div>
        ))}{' '}
      </nav>
    </>
  )
}

export default Navbar
