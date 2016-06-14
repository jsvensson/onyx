import React from 'react'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'

import { Rationalist } from '../../components/Rationalist.jsx'

describe('Rationalist', () => {
  it('should render something', () => {
    const wrapper = shallow(<Rationalist><span>Hello!</span></Rationalist>)
    expect(wrapper.contains([<span>Hello!</span>]))
  });
});
