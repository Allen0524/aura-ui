import React, {useState} from 'react'
import {CheckboxContainer, CheckboxInput, Checkbox} from './Checkbox'

export default {
  title: 'Button',
  component: CheckboxContainer,
}

export const Basic = () => {
  const [checked, setChecked] = useState(true)
  return (
    <>
      <Checkbox checked={checked} onChange={e => setChecked(e.target.checked)}>
        123
      </Checkbox>
    </>
  )
}

export const CustomCheckbox = () => {
  const [checked, setChecked] = useState(true)
  return (
    <>
      <label>
        <CheckboxContainer
          checked={checked}
          onChange={e => setChecked(e.target.checked)}
        >
          <CheckboxInput />
          <span>checked: {JSON.stringify(checked)}</span>
        </CheckboxContainer>
      </label>
    </>
  )
}

export const FormCheckboxUnControlled = () => {
  function handleOnSubmit(e) {
    e.preventDefault()
    const formData = e.target.elements
    console.log(formData)
    console.log(formData.firstname.value)
    console.log(e.target[1].checked)
  }
  return (
    <form onSubmit={handleOnSubmit}>
      <label htmlFor="first_name">first Name:</label>
      <input
        id="first_name"
        name="firstname"
        type="text"
        placeholder="type somethig..."
      />
      <br />
      <CustomCheckbox />
      <br />
      <button type="submit">submit</button>
    </form>
  )
}
