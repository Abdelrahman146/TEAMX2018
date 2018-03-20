import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import styled from 'styled-components'

//components
import PHeader from '../components/PHeader'
import Footer from '../components/Footer'
import TitleBox from '../components/TitleBox'
import Section from '../components/Section'
import Headline from '../components/Headline'
import Card from '../components/Card'
//import { Button } from 'antd'

import abdel from '../images/team/abdel.jpg'
import member1 from '../images/team/member1.jpg'
import member2 from '../images/team/member2.jpg'

class About extends React.Component {
  render() {
    const { data } = this.props
    const layout = this.props.layoutData
    const page = data.page
    const bg =
      page.frontmatter.wallpaper == null
        ? ''
        : page.frontmatter.wallpaper.childImageSharp.resize.src
    const Wallpaper = styled.div`
      background-image: url(${bg});
    `

    //fetch sections
    const sectionslist = []
    let i = 0
    page.frontmatter.sections.forEach(section => {
      const image = section.image.childImageSharp.resize.src
      sectionslist.push(
        <Section
          key={section.title_en}
          title={section.title_en}
          image={image}
          imageTransparent={section.imageTransparent}
          description={section.description_en}
          btn_text={section.button_text_en}
          btn_link={section.button_link_en}
          order={i++}
        />
      )
    })

    //fetch features
    const featureslist = []
    page.frontmatter.features.forEach(feature => {
      featureslist.push(
        <Card
          key={feature.title_en}
          color=""
          image={feature.image}
          image_type="icon"
          header={<h4>{feature.title_en}</h4>}
          text={<p>{feature.description_en}</p>}
        />
      )
    })

    //fetch members

    return (
      <div>
        <Helmet>
          <title>
            {layout.title} | {page.frontmatter.title_en}
          </title>
        </Helmet>
        <div className="content">
          <PHeader language="العربية" logo={layout.logo} menu={layout.menu} />
          <div className="container-fluid">
            <TitleBox
              pageTitle={page.frontmatter.page_title_en}
              pageSubtitle={page.frontmatter.subtitle_en}
              pageDescription={page.frontmatter.description_en}
            />
            <div className="page">
              <div className="row">
                <div className="col">
                  <div className="page-content">
                    <Headline title={page.frontmatter.sections_title_en} />
                    {sectionslist}
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <div className="page-content">
                    <div className="card-deck">
                      <Card
                        color="pink"
                        image="eye"
                        image_type="icon"
                        header={<h3>Vision</h3>}
                        text={<p>{page.frontmatter.vision_en}</p>}
                      />
                      <Card
                        color="purple"
                        image="flag"
                        image_type="icon"
                        header={<h3>Mission</h3>}
                        text={<p>{page.frontmatter.mission_en}</p>}
                      />
                      {/* <Button type="primary">Primary</Button> */}
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <div className="page-content">
                    <Headline title={page.frontmatter.features_title_en} />
                    <div className="card-deck">{featureslist}</div>
                  </div>
                </div>
              </div>
              <br />
              {/* <div className="row">
                        <div className="col">
                            <div className="page-content">
                                <Headline title={layout.lang == 'en' ? "Our Team" : "الفريق"}/>
                                <div className="row">
                                {data.team.edges.map(({node}) => (
                                    <div className="col-sm-3 mb-4 team-card">
                                        <Card 
                                        color= ""
                                        image= {node.frontmatter.image.childImageSharp.resize.src}
                                        image_type= "img"
                                        header= {<h4>{node.frontmatter.name}</h4>}
                                        text= {<p>{node.frontmatter.role}</p>}
                                        footer={<Link className="btn btn-primary" to={node.frontmatter.path}>Business Card </Link>}
                                        />
                                    </div>
                                ))}
                                </div>
                            </div>
                        </div>
                    </div> */}
            </div>

            <Footer
              text={layout.footer}
              twt={layout.socialMedia.twitter}
              fb={layout.socialMedia.facebook}
              inst={layout.socialMedia.instagram}
              gp={layout.socialMedia.google_plus}
              ytb={layout.socialMedia.youtube}
            />
          </div>
        </div>
        <Wallpaper id="bg" />
      </div>
    )
  }
}

export default About

export const aboutQuery = graphql`
  query AboutQuery {
    page: markdownRemark(frontmatter: { slug: { eq: "about" } }) {
      frontmatter {
        title_en
        page_title_en
        subtitle_en
        description_en
        vision_en
        mission_en
        sections_title_en
        features_title_en
        wallpaper {
          childImageSharp {
            resize(width: 1920) {
              src
            }
          }
        }
        sections {
          title_en
          image {
            childImageSharp {
              resize(width: 500) {
                src
              }
            }
          }
          imageTransparent
          description_en
          button_text_en
          button_link_en
        }
        features {
          title_en
          image
          description_en
        }
      }
    }
    team: allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "member" }, langKey: { eq: "en" } } }
    ) {
      edges {
        node {
          frontmatter {
            path
            role
            name
            image {
              childImageSharp {
                resize(width: 500) {
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
