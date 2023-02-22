import React from 'react'
import { mount } from 'cypress/react18'
import { ListItem } from '../../src/ListItem';

describe('<ListItem />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    mount(<ListItem />)
  })
})