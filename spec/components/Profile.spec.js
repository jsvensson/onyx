import React from 'react'
import chai, { expect } from 'chai'
import { render, shallow, mount } from 'enzyme'
import chaiEnzyme from 'chai-enzyme'

chai.use(chaiEnzyme())

import { Profile } from '../../components/Profile.jsx'

describe('Profile component', () => {
  const testProfile = {
    name: 'Morat',
    swc: 0,
    cost: 14,
    weaponsBS: ['Combi Rifle'],
    weaponsCC: ['Pistol', 'Knife'],
    skills: ['Morat', 'Fireteam: Core']
  }

  context('properties', () => {
    it('passes id along', () => {
      const wrapper = mount(<Profile id="foo" profile={testProfile} />)
      const expected = 'foo'

      expect(wrapper).to.have.id(expected)
    })
  })

});
