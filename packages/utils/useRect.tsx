import React from 'react'

export default function useRect(ref: React.RefObject<HTMLElement | null>) {
  const [element, setElement] = React.useState(ref.current)
  const [rect, setRect] = React.useState<DOMRect | null>(null)

  React.useEffect(() => {
    if (element !== ref.current) {
      setElement(ref.current)
    }
  }, [])

  React.useEffect(() => {
    if (element) {
      setRect(element.getBoundingClientRect())
    }
  }, [element])

  return rect
}
