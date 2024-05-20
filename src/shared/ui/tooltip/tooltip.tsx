'use client'
import * as React from 'react'
import * as TooltipRadix from '@radix-ui/react-tooltip'
import { clsx } from 'clsx'

const TooltipProvider = TooltipRadix.Provider

const Tooltip = TooltipRadix.Root

const TooltipTrigger = TooltipRadix.Trigger

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipRadix.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipRadix.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipRadix.Content
    ref={ref}
    sideOffset={sideOffset}
    className={clsx(
      'z-50 overflow-hidden rounded-md border bg-Dark-500 text-Light-100 px-1 py-1.1 text-sm shadow-md animate-in fade-in-0 zoom-in-95' +
        'data-[state=closed]:animate-out' +
        'data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2' +
        'data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
      className
    )}
    {...props}
  />
))
TooltipContent.displayName = TooltipRadix.Content.displayName

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }