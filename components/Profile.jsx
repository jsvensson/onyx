import React, { Component } from 'react'

export class Profile extends Component {
  render() {
    const profile = this.props.profile

    return(
      <li className="profile" id={this.props.id}>{profile.name} ({profile.cost})</li>
    )
  }
}

Profile.propTypes = {
  profile: React.PropTypes.shape({
      name: React.PropTypes.string.isRequired,
      swc: React.PropTypes.number.isRequired,
      cost: React.PropTypes.number.isRequired,
      weaponsBS: React.PropTypes.array.isRequired,
      weaponsCC: React.PropTypes.array.isRequired,
      skills: React.PropTypes.array.isRequired

    }).isRequired
}
