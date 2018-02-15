import React from 'react'
import Link from 'gatsby-link'
import { siteMetadata } from '../../gatsby-config'
import emergence from 'emergence.js'

//
//components
import Header from '../components/Header'
import Footer from '../components/Footer'

import '../styles/main.scss'
import 'animate.css/animate.css'
import 'prismjs/themes/prism-okaidia.css'
import 'font-awesome/css/font-awesome.css'



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
        <div className="content">
          <Header/>
          {children()}
          <Footer />
        </div>
        <div id="bg"></div>
      </div>
    )
  }
}

export default Template
