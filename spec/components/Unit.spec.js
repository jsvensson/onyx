import React from 'react'
import chai, { expect } from 'chai'
import { render, shallow, mount } from 'enzyme'
import chaiEnzyme from 'chai-enzyme'

chai.use(chaiEnzyme())

import { Unit } from '../../components/Unit.jsx'

describe('Unit component', () => {
  const testProfile = {
    name: 'Morat Vanguard Infantry',
    faction: 'Combined Army',
    profiles: [
      {
        name: 'Morat',
        swc: 0,
        cost: 14,
        weaponsBS: ['Combi Rifle'],
        weaponsCC: ['Pistol', 'Knife'],
        skills: ['Morat', 'Fireteam: Core']
      },
      {
        name: 'Morat Lieutenant',
        swc: 1,
        cost: 14,
        weaponsBS: ['Combi Rifle'],
        weaponsCC: ['Pistol', 'Knife'],
        skills: ['Morat', 'Fireteam: Core']
      }
    ]
  }

  context('rendering', () => {
    it('renders', () => {
      const wrapper = shallow(<Unit unitData={testProfile} />)
      expect(wrapper).to.have.tagName('ul')
    })

    it('renders a unit profile', () => {
      const wrapper = mount(<Unit unitData={testProfile} />)
      expect(wrapper.find('.profile').length).to.be.at.least(1)
    })

    it('renders expected number of unit profiles', () => {
      const wrapper = mount(<Unit unitData={testProfile} />)
      const expected = 2

      expect(wrapper).to.have.exactly(expected).descendants('.profile')
    })

    it('renders a profile with profile cost', () => {
      const wrapper = mount(<Unit unitData={testProfile} />)
      const expected = 'Morat (14)'

      expect(wrapper.find('#0')).to.have.text(expected)
    })
  })
});
