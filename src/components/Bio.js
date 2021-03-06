import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from '../assets/calicojack.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Kyle Mathews`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        <p>
          Dictated by <strong>"Calico" Jack Rackham</strong>. Greatest Pirate whosoever sailed the Carribean
          {' '}
          <a href="https://twitter.com/captncalicojack">
            Ye should follow meh on Twitter.
          </a>
        </p>
      </div>
    )
  }
}

export default Bio
