import React from 'react';
import { mount } from 'cypress/react18';
import App from "../../src/App";

describe('First test in cypress', () => {
  it('cypress runs correctly', () => {
    mount(<App />)
  })
})