import { useBreakpoints } from '@/lib/breakpoints'
import { PanelLeftCloseIcon, PanelLeftOpenIcon } from 'lucide-react'
import { Button } from './ui/button'
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle } from './ui/drawer'

interface ResponsiveSidebarProps {
  title: string
  drawerOpen: boolean
  setDrawerOpen: (open: boolean) => void
  buttonFunction: () => void
  children: React.ReactNode
  titleBarButton?: boolean
  buttonText?: string
  drawerContent: React.ReactNode
}

const ResponsiveSidebar = ({
  title,
  drawerOpen,
  setDrawerOpen,
  buttonFunction,
  children,
  titleBarButton = false,
  buttonText,
  drawerContent,
}: ResponsiveSidebarProps) => {
  const { md } = useBreakpoints()
  if (md) {
    return (
      <>
        {/* Sidebar closed state */}
        {/* invert drawerOpen here since the filters should be open by default but otherwise problems with the mobile drawer emerge*/}
        <div className={`mr-3 border-r-2 ${!drawerOpen && 'hidden'}`}>
          <Button
            variant={'ghost'}
            size={'icon'}
            onClick={() => setDrawerOpen(!drawerOpen)}
            className="sticky top-20"
          >
            <PanelLeftOpenIcon className="!h-6 !w-6" />
          </Button>
        </div>
        {/* Sidebar open state */}
        <div
          className={`mr-4 w-[250px] border-r-2 ${drawerOpen && 'hidden'} pr-4`}
        >
          <div className="sticky top-20">
            <div className="flex flex-row items-center gap-2 pb-4">
              <Button
                variant={'ghost'}
                size={'icon'}
                onClick={() => setDrawerOpen(!drawerOpen)}
              >
                <PanelLeftCloseIcon className="!h-6 !w-6" />
              </Button>
              <span className="text-2xl font-medium">Filters</span>
              {titleBarButton && (
                <Button
                  variant={'outline'}
                  className="ml-auto"
                  onClick={buttonFunction}
                >
                  {buttonText}
                </Button>
              )}
            </div>
            {/* Filter Components */}
            {children}
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
        <DrawerContent className="px-4 pb-4">
          <DrawerHeader className="px-0 text-left">
            <div className="space-between flex">
              <DrawerTitle className="font-serif text-3xl font-semibold">
                {title}
              </DrawerTitle>
              {titleBarButton && (
                <Button
                  variant={'outline'}
                  className="ml-auto"
                  onClick={buttonFunction}
                >
                  {buttonText}
                </Button>
              )}
            </div>
          </DrawerHeader>
          <div className="mb-2 max-h-[50vh] overflow-y-auto">{children}</div>
          {drawerContent}
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default ResponsiveSidebar
