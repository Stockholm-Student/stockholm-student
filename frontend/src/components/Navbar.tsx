// components/Navbar.tsx
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/logo/horizontal-logo.svg'

const Navbar = () => {
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  const [scrollY, setScrollY] = useState(0)

  let height = screen.height - 200; 

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed left-0 right-0 z-50 p-4 transition-all backdrop-blur-md ${scrollY < height && isHomePage && 'backdrop-blur-none'} ${scrollY == 0 ? 'top-8' : 'top-0'} `}
    >
      {/* Table with all nva links to make all items have same width regardless of content (except logo) */}
      <table className="mx-auto w-full max-w-screen-xl text-center">
        <tr>
          <td className="w-1/6">
            <Link
              to="/events"
              className={`font-serif text-xl font-bold transition-all hover:underline ${isHomePage && scrollY < height && 'invert'} ${
                location.pathname === '/events' ? 'underline' : 'text-black'
              }`}
            >
              Events
            </Link>
          </td>
          <td className="w-1/6">
            <Link
              to="/community"
              className={`font-serif text-xl font-bold transition-all hover:underline ${isHomePage && scrollY < height && 'invert'} ${
                location.pathname === '/community' ? 'underline' : 'text-black'
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
              className={`font-serif text-xl font-bold transition-all hover:underline ${isHomePage && scrollY < height && 'invert'} ${
                location.pathname === '/wiki' ? 'underline' : 'text-black'
              }`}
            >
              Wiki
            </Link>
          </td>
          <td className="w-1/6">
            <Link
              to="/more"
              className={`font-serif text-xl font-bold transition-all hover:underline ${isHomePage && scrollY < height && 'invert'} ${
                location.pathname === '/more' ? 'underline' : 'text-black'
              }`}
            >
              More
            </Link>
          </td>
        </tr>
      </table>
    </nav>
  )
}

export default Navbar
