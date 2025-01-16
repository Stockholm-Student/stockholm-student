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
  description?: string
  title?: string
}

export function ResponsiveDialog({
  children,
  isOpen,
  setIsOpen,
  description,
  title,
}: ResponsiveDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent
        className={`max-h-[98vh] max-w-[98vw] overflow-scroll rounded-md p-4 sm:p-5 md:h-fit md:max-w-[600px] lg:max-w-[750px]`}
      >
        <DialogHeader>
          <DialogTitle className="text-2xl">{title}</DialogTitle>
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  )
}
