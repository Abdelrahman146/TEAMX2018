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
              title={section.title_ar}
              image={image}
              imageTransparent= {section.imageTransparent}
              description={section.description_ar}
              btn_text= {section.button_text_ar}
              btn_link={section.button_link_ar}
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
              header= {<h4>{feature.title_ar}</h4>}
              text= {<p>{feature.description_ar}</p>}
              />
            )
          }
        )

        return (
            <div>
            <Helmet>
                <html dir="rtl" lang="ar"/>
                <meta charSet="utf-8" />
                <title>{metadata.title_ar} | {page.frontmatter.title_ar}</title>
            </Helmet>
            <div className="content">
            <Header
            language="English"
            />
            <div className="container-fluid">
                <TitleBox
                pageTitle={page.frontmatter.page_title_ar}
                pageSubtitle={page.frontmatter.subtitle_ar}
                pageDescription={page.frontmatter.description_ar}
                />
                <div className="page">

                    <div className="row">
                        <div className="col">
                            <div class="page-content">
                                <Headline title={page.frontmatter.sections_title_ar}/>
                                {sectionslist}
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <div className="page-content">
                                <div className="card-deck">
                                    <Card 
                                    color="purple"
                                    image= "flag"
                                    image_type= "icon"
                                    header= {<h3>مهمتنا</h3>}
                                    text= {<p>{page.frontmatter.mission_ar}</p>}
                                    />
                                    <Card 
                                    color= "pink"
                                    image= "eye"
                                    image_type= "icon"
                                    header= {<h3>رؤيتنا</h3>}
                                    text= {<p>{page.frontmatter.vision_ar}</p>}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <div className="page-content">
                                <Headline title={page.frontmatter.features_title_ar}/>
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
                <Footer 
                lang="ar"
                />
            </div>
            <Cover id="bg"></Cover>
        </div>
        )
    }
}

export default About

export const aboutQuery = graphql`
    query AboutQueryAr {
        site{
            siteMetadata{
            title_ar
            }
        }
        markdownRemark(frontmatter:{slug: {eq:"about"}}){
            frontmatter {
            title_ar
            page_title_ar
            subtitle_ar
            description_ar
            vision_ar
            mission_ar
            sections_title_ar
            features_title_ar
            cover {
                childImageSharp {
                    resize (width: 1920){
                        src
                    }
                }
            }
            sections {
                title_ar
                image {
                    childImageSharp {
                        resize (width: 500){
                            src
                        }
                    }
                }
                imageTransparent
                description_ar
                button_text_ar
                button_link_ar
            }
            features {
                title_ar
                image
                description_ar
            }
        }
        }
    }
`