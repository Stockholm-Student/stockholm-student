import { Link } from 'react-router-dom'
import logo from '../assets/logo/horizontal-logo.svg'
import { ModeToggle } from './mode-toggle'

const Footer = () => {
  return (
    <div className="flex h-40 w-full flex-row bg-gradient-to-t from-foreground/20 to-background p-5">
      <Link to="/" className="">
        <img src={logo} alt="STST Logo" className="dark:invert px-4" />
      </Link>
      <ModeToggle></ModeToggle>
    </div>
  )
}

export default Footer
