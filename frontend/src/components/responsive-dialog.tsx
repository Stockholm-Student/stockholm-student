import * as React from 'react'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/drawer'
import { useBreakpoints } from '@/lib/breakpoints'

interface ResponsiveDialogProps {
  children: React.ReactNode
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  title: string
  description?: string
  large?: boolean
}

export function ResponsiveDialog({
  children,
  isOpen,
  setIsOpen,
  title,
  description,
  large = false,
}: ResponsiveDialogProps) {
  const { sm } = useBreakpoints()

  if (sm) {
    return (
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent
          className={`max-h-[98vh] overflow-scroll sm:max-w-[425px] md:max-w-[600px] lg:max-w-[750px] ${large && '[&_button:not(.exclude)]:absolute [&_button:not(.exclude)]:right-7 [&_button:not(.exclude)]:top-7 [&_button:not(.exclude)]:z-10 [&_button:not(.exclude)]:rounded-full [&_button:not(.exclude)]:bg-background [&_button:not(.exclude)]:p-2 [&_button:not(.exclude)]:text-foreground [&_div.flex.text-center]:hidden [&_svg]:size-5'}`}
        >
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            {description && (
              <DialogDescription>{description}</DialogDescription>
            )}
          </DialogHeader>
          {children}
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerContent className="mb-5 px-4">
        <DrawerHeader className="text-left">
          <DrawerTitle>{title}</DrawerTitle>
          {description && <DialogDescription>{description}</DialogDescription>}
        </DrawerHeader>
        {children}
      </DrawerContent>
    </Drawer>
  )
}
