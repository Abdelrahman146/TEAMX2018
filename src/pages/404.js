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

import bg from '../images/404.jpg'

class Index extends React.Component {
    
    render() {
        
        const { data } = this.props
        const layout = this.props.layoutData
        const Wallpaper = styled.div`
                background-image: url(${bg});
        `;
        return (
            <div>
            <div className="content">
            <Header
            language="العربية"
            logo={layout.logo}
            />
            <Helmet>
                <meta charSet="utf-8" />
                <title>{layout.title}</title>
            </Helmet>
            <div className="container-fluid">
            <TitleBox
            pageTitle="404"
            pageSubtitle="We are Sorry, this page seems doesn't exist or still under construction"
            pageDescription=""
             />
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