import DashboardSidebar from '@/components/dashboard-sidebar'
import { ProfileComponent } from '@/components/profile'
import { MenuGroup, User } from '@/types/interfaces'
import { Types } from 'mongoose'
import { Link, Route, Routes } from 'react-router-dom'
import NotFound from './404'

const menuGroups: MenuGroup[] = [
  { title: 'Events', items: ['All', 'Upcoming', 'Unpublished', 'Past'] },
  { title: 'Organizations', items: ['Overview', 'Manage'] },
  { title: 'Your Account', items: ['Profile', 'Settings', 'Communities'] },
]
// Mock user data for development/testing
const mockUser: User = {
  _id: new Types.ObjectId('60d21b4667d0d8992e610c85'),
  email: 'john.doe@example.com',
  password: 'hashedpassword123',
  userName: 'JohnDoe',
  bio: 'Computer Science student passionate about web development and AI.',
  university: 'Stockholm University',
  country: 'Sweden',
  createdAt: new Date('2021-06-15T08:30:00.000Z'),
  interests: [
    'Programming',
    'Machine Learning',
    'Web Development',
    'Blockchain',
  ],
  saves: [
    new Types.ObjectId('60d21b4667d0d8992e610c86'),
    new Types.ObjectId('60d21b4667d0d8992e610c87'),
  ],
  permissions: [
    [new Types.ObjectId('60d21b4667d0d8992e610c88'), 'admin'],
    [new Types.ObjectId('60d21b4667d0d8992e610c89'), 'user'],
  ],
}

const onUpdateProfile = () => {
  console.log('Updated user:', mockUser)
}

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background sm:p-4 md:p-6">
      <h1 className="mb-0 font-serif text-5xl font-bold">
        <Link to="/dashboard">Dashboard</Link>
      </h1>
      {/* Header Section */}
      <div className="mt-8 flex flex-col md:flex-row">
        <DashboardSidebar menuGroups={menuGroups} />
        <div className="w-full rounded-md p-4 sm:bg-muted">
          <Routes>
            <Route
              path="/profile"
              element={
                <ProfileComponent
                  user={mockUser}
                  onUpdate={() => onUpdateProfile()}
                />
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}
