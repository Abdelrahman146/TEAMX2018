import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import sortBy from 'lodash/sortBy'
import Helmet from 'react-helmet'
import LazyLoad from 'react-lazyload'

import TitleBox from '../components/TitleBox'

import web from '../images/services/web.png'
import mob from '../images/services/mob.png'
import marketing from '../images/services/marketing.png'


class About extends React.Component {
    render() {
        const { data } = this.props
        const page = data.service
        const services = data.services.edges
        const serviceslist = [];
        services.forEach(service => {
            service = service.node
            const image = service.frontmatter.image.childImageSharp.resize.src
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
            </div>
        )
    }
}

export default About

export const pageQuery = graphql`
    query ServicesQuery {
        service: markdownRemark(frontmatter:{slug: {eq:"services"}}){
            frontmatter {
            title
            page_title
            subtitle
            description
            }
            html
        }
        services: allMarkdownRemark(filter: {frontmatter: { type: { eq: "service"}}}){
            edges {
            node{
                frontmatter{
                title
                description
                image {
                    childImageSharp {
                        resize (width: 200){
                            src
                        }
                    }
                }
                }
            }
            }
        }
    }
`