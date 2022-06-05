import React from 'react'
import createContext from '../context/createContext'

interface CheckboxContainerProps {
  id: string
  checked: boolean
  onChange: (checked: boolean) => void
  children: React.ReactNode
}

type CheckboxContextValue = {
  checked: boolean
  onChange: (checked: boolean) => void
}

const [CheckboxProvider, useCheckboxContext] =
  createContext<CheckboxContextValue>('Checkbox')

function CheckboxContainer(props: CheckboxContainerProps) {
  const {id, checked, onChange} = props
  // const [checked, setChecked] = React.useState(true)
  let context = {
    id,
    checked,
    onChange,
  }
  return (
    <CheckboxProvider {...context}>
      <span>{props.children}</span>
    </CheckboxProvider>
  )
}

function Checkbox(props) {
  const {children, ...rest} = props
  return (
    <label>
      <input type="checkbox" data-aura-check {...rest} />
      {props.children}
    </label>
  )
}

// This element should be visually hidden and manage its state and hold a form name and value.
const CheckboxInput = () => {
  let {id, checked, onChange} = useCheckboxContext()
  let ref: CustomCheckboxInputRef = React.useRef(null)

  return (
    <>
      <input
        id={id}
        ref={ref}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        style={{
          transform: 'translateX(-100%)',
          position: 'absolute',
          pointerEvents: 'none',
          opacity: '0',
          margin: '-1',
          padding: '0',
          border: '0',
          width: '1',
          height: '1',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
        }}
      />
    </>
  )
}

const CustomCheckbox = props => {
  return (
    <CheckboxContainer {...props}>
      <label>
        <CheckboxInput />
        {props.children && props.children}
      </label>
    </CheckboxContainer>
  )
}

type CustomCheckboxInputRef = React.RefObject<HTMLInputElement | null>

export {CheckboxContainer, CheckboxInput, Checkbox}
