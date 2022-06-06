import React from 'react'
import ReactDOM from 'react-dom'

interface PortalProps {
  children: React.ReactNode
}

export default function Portal({children}: PortalProps) {
  return children && ReactDOM.createPortal(children, document.body)
}
