import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import sortBy from 'lodash/sortBy'
import Helmet from 'react-helmet'
import LazyLoad from 'react-lazyload'
import styled from "styled-components";

//components
import Header from '../components/Header'
import Footer from '../components/Footer'
import TitleBox from '../components/TitleBox'
import Menu from '../components/Menu'
import Subscribe from '../components/Subscribe'



class Index extends React.Component {
    
    render() {
        
        const { data } = this.props
        const layout = this.props.layoutData
        const page = data.markdownRemark
        const Wallpaper = styled.div`
               
        `;
        return (
            <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>TEAMX Blog</title>
            </Helmet>

            <div className="content">
            <Header
            language="العربية"
            logo={layout.logo}
            />
            <div className="container-fluid">
            <TitleBox
            pageTitle="This is our Future Blog :)"
            pageSubtitle="Please visit us again soon"
            pageDescription="we are currently Developing our amazing blog. Please send us your email if you want to be notified when we publish our first post"
             />

             <div className="row">
             <Subscribe
             sendTo = {page.frontmatter.email}
             lang = {layout.lang}
             emailPlaceholder = "example@domain.com"
             redirect = "/"
             buttonText = "SEND"
             />
             </div>

             <Menu 
             lang={layout.lang}
             menu={layout.menu}
            />
            <Footer 
            text= {layout.footer}
            twt= {layout.socialMedia.twitter}
            fb= {layout.socialMedia.facebook}
            inst= {layout.socialMedia.instagram}
            gp= {layout.socialMedia.google_plus}
            ytb= {layout.socialMedia.youtube}
            />
            </div>
            </div>
            <Wallpaper id="bg"></Wallpaper>

            </div>
        )
    }
}

export default Index

export const blogQuery = graphql`
    query BlogQuery {
        markdownRemark(frontmatter:{slug: {eq:"contact"}}){
            frontmatter {
                email
            }
        }
    }
`