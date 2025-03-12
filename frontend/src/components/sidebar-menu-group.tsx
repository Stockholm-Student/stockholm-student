import { Link } from 'react-router-dom'

interface SidebarMenuGroupProps {
  menuGroup: {
    title: string
    items: string[]
  }
  active: string
  setActive: (active: string) => void
}

export function SidebarMenuGroup({
  menuGroup,
  active,
  setActive,
}: SidebarMenuGroupProps) {
  return (
    <div className="my-4 flex flex-col">
      <div className="text-2xl font-bold uppercase text-muted-foreground">
        {menuGroup.title}
      </div>
      <div className="mt-3 flex flex-col gap-2">
        {menuGroup.items.map((item) => (
          <div className="flex flex-row text-foreground">
            {/*remove all spaces and link to anchor */}
            <Link
              to={item.toLowerCase().replace(/\s+/g, '')}
              className={`${active == menuGroup.title + item && 'underline'} hover:underline`}
              onClick={() => setActive(menuGroup.title + item)}
            >
              {item}
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
