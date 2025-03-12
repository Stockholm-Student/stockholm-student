import { Button } from '@/components/ui/button'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const NotFound: React.FC = () => {
  const location = useLocation()
  return (
    <div className="flex h-full w-full flex-col items-center justify-center px-6 py-10 text-center">
      <div className="flex flex-col items-center space-y-6">
        <div>
          <p>Current Location:</p>
          <p className="text-sm text-muted-foreground">{location.pathname}</p>
        </div>
        <h1 className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-[30vh] font-extrabold text-transparent">
          404
        </h1>
        <p className="text-xl">Page Not Found</p>
        <p>The page you're looking for does not seem to exist.</p>

        <Link to="/">
          <Button> Go to Home</Button>
        </Link>
      </div>
    </div>
  )
}

export default NotFound
