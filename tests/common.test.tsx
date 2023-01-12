import React from 'react'
import { render } from '@testing-library/react'

import 'jest-canvas-mock'

import CustomModal from '../src/components/App'

const toggle = () => console.log('Custom Modal Test')

describe('Common render', () => {
  it('renders without crashing', () => {
    render(
      <React.Fragment>
        <CustomModal isOpen={true} toggle={toggle}>
          <div>ok</div>
        </CustomModal>
      </React.Fragment>,
    )
  })
})
