import React from 'react'
import Link from 'gatsby-link'
import emergence from 'emergence.js'
import Helmet from 'react-helmet'
import styled from "styled-components";

// import 'font-awesome/css/font-awesome.min.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'mdbreact/dist/css/mdb.css';


// images
import logo from "../images/logo.png";

import '../styles/main.scss'

class Template extends React.Component {
  componentDidMount() {
    emergence.init()
  }

  componentDidUpdate() {
    emergence.init()
  }

  render() {
    
    //const { location, children } = this.props
    const layoutData = {
      lang: 'ar',
      title: this.props.data.site.siteMetadata.title_ar,
      title: 'تيم اكس تيك',
      logo: logo,
      location: this.props.location.pathname,
      menu: [
        {text: 'من نحن', link: '/ar/about'},
        {text: 'خدماتنا', link: '/ar/services'},
        {text: 'تواصل معنا', link: '/ar/contact'},
        {text: 'المدونة', link: '/ar/blog'},
      ],
      footer: 'قام بتصميم و تطوير هذا الموقع فريق "تيم اكس" - 2018',
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
                <html dir="rtl" lang="ar"/>
                <meta charSet="utf-8" />
            </Helmet>
            {this.props.children({...this.props, layoutData})}
      </div>
    )
  }
}

export default Template

export const layoutQuery = graphql`
    query LayoutQueryAr {
        site{
            siteMetadata{
            title_ar
            }
        }
    }
`