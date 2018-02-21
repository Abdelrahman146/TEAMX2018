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



class Index extends React.Component {
    
    render() {
        
        const { data } = this.props
        const layout = this.props.layoutData
        const page = data.markdownRemark
        const bg = page.frontmatter.wallpaper == null ? "" : page.frontmatter.wallpaper.childImageSharp.resize.src
        const Wallpaper = styled.div`
                background-image: url(${bg});
        `;
        return (
            <div>
            <Helmet>
                <title>{layout.title} | {page.frontmatter.title_ar}</title>
            </Helmet>

            <div className="content">
            <Header
            language="English"
            logo={layout.logo}
            />
            <div className="container-fluid">
            <TitleBox
            pageTitle={page.frontmatter.page_title_ar}
            pageSubtitle={page.frontmatter.subtitle_ar}
            pageDescription={page.frontmatter.description_ar}
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

export const pageQuery = graphql`
    query IndexQueryAr {
        markdownRemark(frontmatter:{slug: {eq:"home"}}){
            frontmatter {
            title_ar
            page_title_ar
            subtitle_ar
            description_ar
            wallpaper {
                childImageSharp {
                    resize (width: 1920){
                        src
                    }
                }
            }
        }
        }
    }
`