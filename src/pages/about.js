import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import styled from "styled-components";

//components
import Header from '../components/Header'
import Footer from '../components/Footer'
import TitleBox from '../components/TitleBox'
import Section from '../components/Section'
import Headline from '../components/Headline'
import Card from '../components/Card'


import abdel from '../images/team/abdel.jpg'
import member1 from '../images/team/member1.jpg'
import member2 from '../images/team/member2.jpg'


class About extends React.Component {
    render() {
        const { data } = this.props
        const metadata = data.site.siteMetadata
        const page = data.markdownRemark
        const bg = page.frontmatter.cover == null ? "" : page.frontmatter.cover.childImageSharp.resize.src
        const Cover = styled.div`
                background-image: url(${bg});
        `;

        //fetch sections
        const sectionslist = [];
        let i = 0;
        page.frontmatter.sections.forEach(section => {
            const image = section.image.childImageSharp.resize.src
            sectionslist.push(
              <Section
              title={section.title_en}
              image={image}
              imageTransparent= {section.imageTransparent}
              description={section.description_en}
              btn_text= {section.button_text_en}
              btn_link={section.button_link_en}
              order= {i++}
              />
            )
          }
        )

        //fetch features
        const featureslist = [];
        page.frontmatter.features.forEach(feature => {
            featureslist.push(
              <Card 
              color= ""
              image= {feature.image}
              image_type= "icon"
              header= {<h4>{feature.title_en}</h4>}
              text= {<p>{feature.description_en}</p>}
              />
            )
          }
        )

        return (
            <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{metadata.title} | {page.frontmatter.title_en}</title>
            </Helmet>
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

                    <div className="row">
                        <div className="col">
                            <div class="page-content">
                                <Headline title={page.frontmatter.sections_title_en}/>
                                {sectionslist}
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <div className="page-content">
                                <div className="card-deck">
                                    <Card 
                                    color= "pink"
                                    image= "eye"
                                    image_type= "icon"
                                    header= {<h3>Vision</h3>}
                                    text= {<p>{page.frontmatter.vision_en}</p>}
                                    />
                                    <Card 
                                    color="purple"
                                    image= "flag"
                                    image_type= "icon"
                                    header= {<h3>Mission</h3>}
                                    text= {<p>{page.frontmatter.mission_en}</p>}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <div className="page-content">
                                <Headline title={page.frontmatter.features_title_en}/>
                                <div className="card-deck">
                                    {featureslist}
                                </div>
                            </div>
                        </div>
                    </div>
                    

                    <div className="row">
                        <div className="col">
                            <div className="page-content">
                                <h1 className="headline">Our Team</h1>
                                <div className="card-deck">
                                    <div className="card member-card">
                                    <img class="card-img-top personal-img" src={abdel} alt="Card image cap"/>
                                        <div className="card-body text-center">
                                        <h4 class="card-title">Abdel Rahman</h4>
                                        <div className="card-text">
                                        <p className="text-muted">
                                            <strong>Web Developer</strong>
                                        </p>
                                        </div>
                                        
                                        </div>
                                        <div className="card-footer">
                                        <Link className="btn btn-primary btn-block" href="#">Info</Link>
                                        </div>
                                    </div>
                                    <div className="card member-card">
                                    <img class="card-img-top personal-img" src={member2} alt="Card image cap"/>
                                        <div className="card-body text-center">
                                        <h4 class="card-title">Member Name</h4>
                                        <div className="card-text">
                                        <p className="text-muted">
                                            <strong>Member Position</strong>
                                        </p>
                                        </div>
                                        </div>
                                        <div className="card-footer">
                                        <Link className="btn btn-primary btn-block" href="#">Info</Link>
                                        </div>
                                    </div>
                                    <div className="card member-card">
                                    <img class="personal-img" src={member1} alt="Card image cap"/>
                                        <div className="card-body text-center">
                                        <h4 class="card-title">Member name</h4>
                                        <div className="card-text">
                                        <p className="text-muted">
                                            <strong>Member position</strong>
                                        </p>
                                        </div>
                                        </div>
                                        <div className="card-footer">
                                        <Link className="btn btn-primary btn-block" href="#">Info</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
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

export const aboutQuery = graphql`
    query AboutQuery {
        site{
            siteMetadata{
            title
            }
        }
        markdownRemark(frontmatter:{slug: {eq:"about"}}){
            frontmatter {
            title_en
            page_title_en
            subtitle_en
            description_en
            vision_en
            mission_en
            sections_title_en
            features_title_en
            cover {
                childImageSharp {
                    resize (width: 1920){
                        src
                    }
                }
            }
            sections {
                title_en
                image {
                    childImageSharp {
                        resize (width: 500){
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
    }
`