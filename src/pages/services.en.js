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
import Headline from '../components/Headline'
import Section from '../components/Section'



class About extends React.Component {
    render() {
        const { data } = this.props
        const page = data.service
        const bg = page.frontmatter.cover == null ? "" : page.frontmatter.cover.childImageSharp.resize.src
        const Cover = styled.div`
                background-image: url(${bg});
        `;
        const services = data.services.edges
        const serviceslist = [];
        let i = 0;
        services.forEach(service => {
            service = service.node.frontmatter
            const image = service.image.childImageSharp.resize.src
            serviceslist.push(
              <Section
              title={service.title_en}
              image={image}
              imageTransparent= {service.imageTransparent}
              description={service.description_en}
              btn_text="Read More"
              btn_link="/"
              order= {i++}
              />
            )
          }
        )
        return (
            <div>
            <div className="content">
            <Header
            language="العربية"
            />
            <div className="container-fluid">
            <TitleBox
            pageTitle={page.frontmatter.page_title_en}
            pageSubtitle={page.frontmatter.subtitle_en}
            pageDescription={page.frontmatter.description_en}
             />
            <div className="page">
                <div className="page-content">
                    <Headline title={page.frontmatter.services_title_en} />
                    {serviceslist}
                </div>
            </div>
          </div>
          
            <Footer 
            lang="en"
            />
        </div>
        <Cover id="bg"></Cover>
            </div>
        )
    }
}

export default About

export const pageQuery = graphql`
    query ServicesQuery {
        service: markdownRemark(frontmatter:{slug: {eq:"services"}}){
            frontmatter {
            title_en
            page_title_en
            subtitle_en
            description_en
            services_title_en
            cover {
                childImageSharp {
                    resize (width: 1920){
                        src
                    }
                }
            }
            }
            html
        }
        services: allMarkdownRemark(filter: {frontmatter: { type: { eq: "service"}}}){
            edges {
            node{
                frontmatter{
                title_en
                description_en
                image {
                    childImageSharp {
                        resize (width: 500){
                            src
                        }
                    }
                }
                imageTransparent
                }
            }
            }
        }
    }
`