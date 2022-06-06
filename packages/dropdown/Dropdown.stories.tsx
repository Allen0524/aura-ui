import React from 'react'
import {Dropdown, DropdownButton, DropdownList, Option} from './Dropdown'

export default {
  title: 'Dropdown',
}

export const Basic = () => {
  const [selectedValue, setSelectedValue] = React.useState('opt 2')
  return (
    <Dropdown selectedValue={selectedValue}>
      <DropdownButton>{selectedValue}</DropdownButton>
      <DropdownList>
        <Option
          value="opt 1"
          onSelect={v => {
            console.log(v)
            setSelectedValue(v)
          }}
        >
          Option 1
        </Option>
        <Option
          value="opt 2"
          onSelect={v => {
            console.log(v)
            setSelectedValue(v)
          }}
        >
          Option 2
        </Option>
        <Option
          value="opt 3"
          onSelect={v => {
            console.log(v)
            setSelectedValue(v)
          }}
        >
          Option 3
        </Option>
        <Option
          value="opt 4"
          onSelect={v => {
            console.log(v)
            setSelectedValue(v)
          }}
        >
          Option 4
        </Option>
        <Option
          value="opt 5"
          onSelect={v => {
            console.log(v)
            setSelectedValue(v)
          }}
        >
          Option 5
        </Option>
        <Option
          value="opt 6"
          onSelect={v => {
            console.log(v)
            setSelectedValue(v)
          }}
        >
          Option 6
        </Option>
        <Option
          value="opt 7"
          onSelect={v => {
            console.log(v)
            setSelectedValue(v)
          }}
        >
          Option 7
        </Option>
        <Option
          value="opt 8"
          onSelect={v => {
            console.log(v)
            setSelectedValue(v)
          }}
        >
          Option 8
        </Option>
        <Option
          value="opt 9"
          onSelect={v => {
            console.log(v)
            setSelectedValue(v)
          }}
        >
          Option 9
        </Option>
      </DropdownList>
    </Dropdown>
  )
}
