import React, { Component } from 'react'
import { Profile } from './Profile.jsx'

export class Unit extends Component {
  render() {
    const profiles = this.props.unitData.profiles

    return(
      <ul>
        {profiles.map(function(profile, index) {
          return(<Profile key={index} id={index} profile={profile} />)
        })}
      </ul>
    );
  }
}

Unit.propTypes = {
  unitData: React.PropTypes.shape({
    name: React.PropTypes.string.isRequired,
    faction: React.PropTypes.string.isRequired,
    profiles: React.PropTypes.array.isRequired
  }).isRequired
}
