import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import styled from "styled-components";

//components
import Header from '../components/Header'
import Footer from '../components/Footer'
import TitleBox from '../components/TitleBox'
import Section from '../components/Section'

import teamx from '../images/teamx.png'
import abdel from '../images/team/abdel.jpg'
import member1 from '../images/team/member1.jpg'
import member2 from '../images/team/member2.jpg'

import original from '../images/features/original.png'
import tech from '../images/features/tech.png'


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
        page.frontmatter.sections.forEach(section => {
            const image = section.image.childImageSharp.resize.src
            sectionslist.push(
              <Section
              title={section.title_en}
              image={image}
              description={section.description_en}
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
            <div className="row">
                <div className="col-sm">
                    <div className="page">
                        {sectionslist}
                        <section>
                        <h1 className="headline">Choose Us If You Are Looking For</h1>
                        <div class="card-group">
                            <div class="card">
                                <img class="card-img-top icon" src={original} alt="Card image cap"/>
                                <div class="card-body text-center">
                                <h4 class="card-title">Originality</h4>
                                <p class="card-text">
                                Vivamus mattis turpis nisl, eu imperdiet eros rutrum in. Ut vestibulum elit consequat, ornare augue id, pretium libero.     
                                </p>
                                </div>
                            </div>
                            <div class="card">
                                <img class="card-img-top icon" src={tech} alt="Card image cap"/>
                                <div class="card-body text-center">
                                <h4 class="card-title">10X Ahead Technology</h4>
                                <p class="card-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dignissim facilisis magna quis ultricies. Vestibulum sit amet porttitor neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut sit amet sagittis urna, finibus fermentum nibh.                                    </p>
                                </div>
                            </div>
                            <div class="card">
                                <img class="card-img-top icon" src={tech} alt="Card image cap"/>
                                <div class="card-body text-center">
                                <h4 class="card-title">10X Ahead Technology</h4>
                                <p class="card-text">
                                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut sit amet sagittis urna, finibus fermentum nibh.                                </p>
                                </div>
                            </div>
                        </div>
                        </section>
                        <section>
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
                description_en
            }
            features {
                title_en
                image {
                    childImageSharp {
                        resize (width: 150){
                            src
                        }
                    }
                }
                description_en
            }
        }
        }
    }
`