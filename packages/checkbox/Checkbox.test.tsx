import * as React from 'react'
import {axe, toHaveNoViolations} from 'jest-axe'
import type {RenderResult} from '@testing-library/react'
import {render, fireEvent} from '@testing-library/react'
import {Checkbox, CheckboxIndicator} from './Checkbox'

const INDICATOR_TEST_ID = 'checkbox-indicator'

expect.extend(toHaveNoViolations)

describe('<Checkbox />', () => {
  let rendered: RenderResult
  let checkbox: HTMLElement
  let indicator: HTMLElement | null

  beforeEach(() => {
    rendered = render(<CheckboxTest />)
    checkbox = rendered.getByRole('checkbox')
    indicator = rendered.getByTestId(INDICATOR_TEST_ID)
  })

  it('should have no accessibility violations', async () => {
    expect(await axe(rendered.container)).toHaveNoViolations()
  })

  // describe('when clicking checkbox', () => {
  //   beforeEach(() => {
  //     fireEvent.click(checkbox)
  //     indicator = rendered.getByTestId(INDICATOR_TEST_ID)
  //   })

  //   it('should render a visible indicator', () => {
  //     expect(indicator).toBeVisible()
  //   })

  //   describe('and clicking the checkbox again', () => {
  //     beforeEach(() => {
  //       fireEvent.click(checkbox)
  //     })

  //     it('should remove the indicator', () => {
  //       expect(indicator).not.toBeInTheDocument()
  //     })
  //   })
  // })
})

function CheckboxTest() {
  return (
    <Checkbox aria-label="basic checkbox">
      <CheckboxIndicator>
        <div>123</div>
      </CheckboxIndicator>
    </Checkbox>
  )
}
