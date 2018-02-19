import React from 'react'
import Link from 'gatsby-link'
import emergence from 'emergence.js'
import Helmet from 'react-helmet'
import styled from "styled-components";

//components
import Header from '../components/Header'
import Footer from '../components/Footer'
import TitleBox from '../components/TitleBox'
import Section from '../components/Section'
import Headline from '../components/Headline'
import Card from '../components/Card'


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
    const layoutData = {
      lang: 'en',
      title: this.props.data.site.siteMetadata.title_en,
      about: {
        text: 'About us',
        link: '/en/about',
      },
      contact: {
        text: 'Contact us',
        link: '/en/contact',
      },
      services: {
        text: 'Services',
        link: '/en/services',
      },
      blog: {
        text: 'Blog',
        link: '/en/blog',
      },
      footer: "This Website is Designed and Developed By TEAMX - 2018",
      socialMedia: {
        twitter: 'https://twitter.com/TeamXItSolution',
        instagram: 'https://instagram.com/TeamXItSolution',
        facebook: 'https://www.facebook.com/Team-X-itsolutions-UAE-132848994074295/',
        youtube: 'https://www.youtube.com/channel/UCKvRXxCQYXgcbAMHAB7edVQ',
        google_plus: 'https://plus.google.com/117975449818228746277',
        instagram: 'https://www.instagram.com/teamxitsolutions/',
      }
    }
    return (
      <div>
            <Helmet>
                <meta charSet="utf-8" />
            </Helmet>
            {children({...this.props, layoutData})}
      </div>
    )
  }
}

export default Template

export const layoutQuery = graphql`
    query LayoutQuery {
        site{
            siteMetadata{
            title_en
            }
        }
    }
`