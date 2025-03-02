import { Button } from '@/components/ui/button'
import React from 'react'
import { Link } from 'react-router-dom'

const NotFound: React.FC = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center px-6 py-10 text-center">
      <div className="flex flex-col items-center space-y-6">
        <h1 className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-[30vw] font-extrabold text-transparent">
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
