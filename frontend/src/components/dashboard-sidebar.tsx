import { MenuGroup } from '@/types/interfaces'
import { LogOutIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import ResponsiveSidebar from './responsive-sidebar'
import { SidebarMenuGroup } from './sidebar-menu-group'
import { Button } from './ui/button'

interface DashboardSidebarProps {
  menuGroups: MenuGroup[]
}

export default function DashboardSidebar({
  menuGroups,
}: DashboardSidebarProps) {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false) //default drawer state is open for desktop but needs to be reversed since mobile drawer problems
  const [activeTab, setActiveTab] = useState<string>('')

  // Add a location effect to track URL changes from external navigation
  const location = useLocation()

  useEffect(() => {
    // Extract the path without leading slash
    const path = location.pathname.substring(1)

    // If path is dashboard or not found in any menu group, reset active tab
    if (path === 'dashboard' || path === '') {
      setActiveTab('')
    }
  }, [location, menuGroups])

  return (
    <ResponsiveSidebar
      drawerOpen={drawerOpen}
      setDrawerOpen={setDrawerOpen}
      title="Menu"
      titleBarButton={false}
      buttonText="Reset All"
      buttonFunction={() => {}}
      drawerContent={null}
    >
      <div className="px-2">
        <Link to="/dashboard" onClick={() => setActiveTab('')}>
          <span
            className={`text-lg hover:underline ${activeTab === '' ? 'underline' : ''}`}
          >
            Dashboard
          </span>
        </Link>
        {menuGroups.map((menuGroup) => (
          <>
            <SidebarMenuGroup
              menuGroup={menuGroup}
              active={activeTab}
              setActive={setActiveTab}
            />
            {/* Add a horizontal line after each menu group but last */}
            {menuGroups.indexOf(menuGroup) !== menuGroups.length - 1 && (
              <hr className="my-3 border-t border-border" />
            )}
          </>
        ))}
        <Button variant={'outline'} onClick={() => {}} className="mt-4 w-full">
          <LogOutIcon /> Logout
        </Button>
      </div>
    </ResponsiveSidebar>
  )
}
