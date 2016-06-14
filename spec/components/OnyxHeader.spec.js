import React from 'react'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'

import { OnyxHeader } from '../../components/OnyxHeader.jsx'

describe('Onyx header component', () => {

  it('renders', () => {
    const wrapper = mount(<OnyxHeader />)
    expect(wrapper)
      .to.have.tagName('div')
      .and.to.have.className('onyx')
      .and.to.have.className('header')
  });

});
