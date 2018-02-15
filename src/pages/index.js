import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import sortBy from 'lodash/sortBy'
import Helmet from 'react-helmet'
import LazyLoad from 'react-lazyload'

import TitleBox from '../components/TitleBox'

import teamx from '../images/teamx.png'
import abdel from '../images/team/abdel.jpg'
import member1 from '../images/team/member2.png'
import member2 from '../images/team/member2.jpg'


class Index extends React.Component {
    render() {
        const { data } = this.props
        const metadata = data.site.siteMetadata
        const page = data.markdownRemark
        return (
            <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{metadata.title} | {page.frontmatter.title}</title>
            </Helmet>
            <div className="container-fluid">
            <TitleBox
            pageTitle={page.frontmatter.page_title}
            pageSubtitle={page.frontmatter.subtitle}
            pageDescription={page.frontmatter.description}
             />
            </div>
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
            title
            page_title
            subtitle
            description
        }
        }
    }
`