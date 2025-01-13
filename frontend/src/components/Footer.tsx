import { useBreakpoints } from '@/lib/breakpoints'
import { Link } from 'react-router-dom'
import logo from '../assets/logo/horizontal-logo.svg'
import MobileNavitem from './MobileNavItem'

const Footer = () => {
  const { sm } = useBreakpoints()
  return (
    <>
      <div className="relative z-10 flex h-40 w-full flex-row bg-background p-5">
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black/30 to-transparent" />

        <Link to="/" className="">
          <img src={logo} alt="STST Logo" className="px-4 dark:invert" />
        </Link>
      </div>
      {/* Add nav bar to replicate a spacer the size of navbar over the page */}
      {!sm && (
        <div className="relative flex w-full justify-between bg-background px-2 py-4">
          <div className="flex w-1/5 items-center justify-center text-background">
            <MobileNavitem
              title={'a'}
              link={'a'}
              icon={'a'}
              active={false}
            ></MobileNavitem>
          </div>
        </div>
      )}
    </>
  )
}

export default Footer
