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



class Index extends React.Component {
    
    render() {
        
        const { data } = this.props
        const metadata = data.site.siteMetadata
        const page = data.markdownRemark
        const bg = page.frontmatter.cover == null ? "" : page.frontmatter.cover.childImageSharp.resize.src
        const Cover = styled.div`
                background-image: url(${bg});
        `;
        return (
            <div>
            <div className="content">
            <Header/>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{metadata.title} | {page.frontmatter.title_en}</title>
            </Helmet>
            <div className="container-fluid">
            <TitleBox
            pageTitle={page.frontmatter.page_title_en}
            pageSubtitle={page.frontmatter.subtitle_en}
            pageDescription={page.frontmatter.description_en}
             />
            </div>
            <Footer />
            </div>
            <Cover id="bg"></Cover>
            </div>
        )
    }
}

export default Index

export const pageQuery = graphql`
    query IndexQuery {
        site{
            siteMetadata{
            title
            }
        }
        markdownRemark(frontmatter:{slug: {eq:"home"}}){
            frontmatter {
            title_en
            page_title_en
            subtitle_en
            description_en
            cover {
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