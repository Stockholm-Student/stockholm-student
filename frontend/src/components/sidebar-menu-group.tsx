import { Link } from 'react-router-dom'

interface SidebarMenuGroupProps {
  title: string
  menuItemList: Array<[string, string]>
}

export function SidebarMenuGroup({
  title,
  menuItemList,
}: SidebarMenuGroupProps) {
  return (
    <div className="flex flex-col">
      <div className="text-2xl font-bold uppercase text-muted-foreground">
        {title}
      </div>
      <div className="flex flex-col">
        {menuItemList.map((item) => (
          <div className="flex flex-row text-foreground">
            <Link to={item[1]}>{item[0]}</Link>
          </div>
        ))}
      </div>
    </div>
  )
}
