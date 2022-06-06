import React from 'react'
import Portal from '../portal'

interface PopoverProps {
  children: React.ReactNode
  positionObj: {}
}

export default function Popover({children, positionObj}: PopoverProps) {
  return (
    <Portal>
      <div
        style={{
          position: 'absolute',
          ...positionObj,
        }}
      >
        {children && children}
      </div>
    </Portal>
  )
}
