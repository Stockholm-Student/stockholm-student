import { Link } from 'react-router-dom'

interface MobileNavitemProps {
  title: string
  link: string
  icon: React.ReactNode
  active: boolean
}

const MobileNavitem = ({ title, link, icon, active }: MobileNavitemProps) => {
  return (
    <Link to={link}>
      <div className="flex flex-col items-center justify-center">
        <div
          className={`flex items-center justify-center rounded-full px-5 py-1 transition-colors duration-300 ${active && 'bg-foreground/90 text-background'}`}
        >
          {icon}
        </div>
        <p>{title}</p>
      </div>
    </Link>
  )
}

export default MobileNavitem
