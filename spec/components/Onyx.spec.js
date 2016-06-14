import React from 'react'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'

import { Onyx } from '../../components/Onyx.jsx'

describe('Onyx root component', () => {

  it('renders', () => {
    const wrapper = mount(<Onyx />)
    expect(wrapper)
      .to.have.tagName('div')
      .and.to.have.className('onyx')
      .and.to.have.className('root')
  });

});
