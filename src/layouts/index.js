import React from 'react'
import Link from 'gatsby-link'
import emergence from 'emergence.js'
//import * as FontAwesome from 'react-icons/fa'

//


import '../styles/main.scss'


class Template extends React.Component {
  componentDidMount() {
    emergence.init()
  }

  componentDidUpdate() {
    emergence.init()
  }

  render() {
    
    const { location, children } = this.props
    return (
      <div>
          {children()}
      </div>
    )
  }
}

export default Template
