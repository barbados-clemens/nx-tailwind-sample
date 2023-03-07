import * as React from 'react'
import NxWelcome from './nx-welcome'


describe(NxWelcome.name, () => {
  it('renders', () => {
    cy.mount(<NxWelcome />)
  })
})

