import * as React from 'react'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

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
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent
        className={`h-[98vh] max-h-[98vh] max-w-[98vw] overflow-scroll rounded-md p-4 sm:p-6 md:max-w-[600px] lg:max-w-[750px] ${large && '[&_button:not(.exclude)]:absolute [&_button:not(.exclude)]:right-5 [&_button:not(.exclude)]:top-5 [&_button:not(.exclude)]:z-10 [&_button:not(.exclude)]:rounded-full [&_button:not(.exclude)]:bg-background/50 [&_button:not(.exclude)]:p-2 [&_button:not(.exclude)]:text-foreground [&_button:not(.exclude)]:backdrop-blur-sm [&_button:not(.exclude)]:hover:bg-background/90 [&_button:not(.exclude)]:sm:right-7 [&_button:not(.exclude)]:sm:top-7 [&_div.flex.text-center]:hidden [&_svg]:size-5'}`}
      >
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  )
}
