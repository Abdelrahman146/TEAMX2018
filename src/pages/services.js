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

import web from '../images/services/web.png'
import mob from '../images/services/mob.png'
import marketing from '../images/services/marketing.png'


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
        services.forEach(service => {
            service = service.node
            const image = "service.frontmatter.image.childImageSharp.resize.src"
            serviceslist.push(
              <div className="card member-card">
              <img class="card-img-top vector" src={image} alt="Card image cap"/>
                  <div className="card-body text-center">
                  <h4 class="card-title">{service.frontmatter.title}</h4>
                  <div className="card-text">
                  <p className="text-muted">
                      {service.frontmatter.description}
                  </p>
                  </div>
                  </div>
                  <div className="card-footer">
                  <Link className="btn btn-primary btn-block" href="#">Read More</Link>
                  </div>
              </div>
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
            pageTitle={page.frontmatter.page_title}
            pageSubtitle={page.frontmatter.subtitle}
            pageDescription={page.frontmatter.description}
             />
            <div className="row">
                <div className="col-sm">
                    <div className="page">
                        <section>
                        <h1 className="headline">{page.frontmatter.title}</h1>
                        <div className="card-deck">
                            {serviceslist}
                        </div>
                        </section>
                    </div>
                </div>
            </div>
          </div>
          
          <Footer />
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
                # image {
                #     childImageSharp {
                #         resize (width: 200){
                #             src
                #         }
                #     }
                # }
                }
            }
            }
        }
    }
`