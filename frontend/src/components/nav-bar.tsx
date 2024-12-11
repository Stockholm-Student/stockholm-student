// components/Navbar.tsx
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/logo/horizontal-logo.svg'
import LoginForm from './login-form'
import { NavMenu } from './nav-menu'
import { ResponsiveDialog } from './responsive-dialog'

const Navbar = () => {
  const location = useLocation()
  const isHomePage = location.pathname === '/'
  const [loginOpen, setLoginOpen] = useState<boolean>(false)
  const [isLogin, setIsLogin] = useState<boolean>(true)

  const [scrollY, setScrollY] = useState(0)

  const height = screen.height - 200

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <ResponsiveDialog
        children={<LoginForm setIsLogin={setIsLogin} isLogin={isLogin} />}
        isOpen={loginOpen}
        setIsOpen={setLoginOpen}
        title={isLogin ? 'Log in' : 'Sign up'}
      ></ResponsiveDialog>
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
                    className={`${
                      isHomePage && scrollY == 0 ? 'h-24' : 'h-12'
                    } ${isHomePage && scrollY < height && 'invert'} mx-auto w-auto px-4 transition-all duration-300 hover:scale-105 dark:invert`}
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

              <td>
                <NavMenu
                  isHomePage={isHomePage}
                  scrollY={scrollY}
                  height={height}
                  setLoginOpen={setLoginOpen}
                  setIsLogin={setIsLogin}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </nav>
    </>
  )
}

export default Navbar
