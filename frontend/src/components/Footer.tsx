import { Link } from 'react-router-dom'
import logo from '../assets/logo/horizontal-logo.svg'

const Footer = () => {
  return (
    <div className="flex h-40 w-full flex-row bg-gradient-to-t from-foreground/20 to-background p-5">
      <Link to="/" className="">
        <img src={logo} alt="STST Logo" className="px-4 dark:invert" />
      </Link>
    </div>
  )
}

export default Footer
