import React from 'react'
import {createContext} from '../context'
import Popover from '../popover'
import {addEventListener, isFunction, useRect} from '../utils'
import './dropdown.css'

interface DropdownProps {
  children: React.ReactNode | ((props: {isOpen: boolean}) => React.ReactNode)
  selectedValue: string
}

interface DropdownButtonProps {
  children: React.ReactNode
}

interface DropdownListProps {
  children: React.ReactNode
}

interface OptionProps {
  children: React.ReactNode
  value: string
  onSelect: (value: string) => void
}

interface DropdownProviderProps {
  isOpen: boolean
  selectedValue: string
  setIsOpen: (isOpen: boolean) => void
  triggerRect: React.MutableRefObject<DOMRect | null>
}

type DropdownButtonRef = React.RefObject<HTMLButtonElement | null>

const [DropdownProvider, useDropdownContext] =
  createContext<DropdownProviderProps>('Dropdown')

function Dropdown({children, selectedValue}: DropdownProps) {
  const [isOpen, setIsOpen] = React.useState(false)
  const triggerRect = React.useRef<DOMRect | null>(null)

  return (
    <DropdownProvider
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      triggerRect={triggerRect}
      selectedValue={selectedValue}
    >
      {isFunction(children) ? children({isOpen}) : children}
    </DropdownProvider>
  )
}

function DropdownButton(props: DropdownButtonProps) {
  const {children} = props
  const outSideListener = React.useRef(null)
  const dropdownButtonRef: DropdownButtonRef = React.useRef(null)
  const {setIsOpen, triggerRect} = useDropdownContext()
  triggerRect.current = useRect(dropdownButtonRef)

  const clickOutsideHandler = (e: MouseEvent) => {
    console.log('object')
    if (
      dropdownButtonRef.current &&
      !dropdownButtonRef.current.contains(e.target)
    ) {
      outSideListener.current?.remove()
      setIsOpen(false)
    }
  }

  function handleClick() {
    outSideListener.current?.remove()
    outSideListener.current = addEventListener(
      document,
      'click',
      clickOutsideHandler,
    )
    setIsOpen(isOpen => !isOpen)
  }

  return (
    <button
      ref={dropdownButtonRef}
      data-aura-dropdown
      type="button"
      onClick={handleClick}
    >
      {children && children}
    </button>
  )
}

// TODO: popover should process collisions
function DropdownList(props: DropdownListProps) {
  const {children} = props
  const {isOpen, triggerRect} = useDropdownContext()
  return (
    <>
      {isOpen && (
        <Popover
          positionObj={{
            top: triggerRect.current?.top + triggerRect.current?.height,
            left: triggerRect.current?.left,
          }}
        >
          <div className="aura-dropsownList">{children}</div>
        </Popover>
      )}
    </>
  )
}

function Option(props: OptionProps) {
  const {children, value, onSelect} = props
  const {setIsOpen, selectedValue} = useDropdownContext()
  let isSelected = selectedValue === value
  function handleClick() {
    onSelect?.(value)
    setIsOpen(isOpen => !isOpen)
  }
  return (
    <div
      className={`aura-option ${isSelected ? 'aura-option--selected' : ''}`}
      onClick={handleClick}
    >
      {children && children}
    </div>
  )
}

export {Dropdown, DropdownButton, DropdownList, Option}
