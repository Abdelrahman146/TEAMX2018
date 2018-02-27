import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import styled from "styled-components";

import Footer from '../components/Footer'
import TitleBox from '../components/TitleBox'
import Section from '../components/Section'
import Headline from '../components/Headline'
import Card from '../components/Card'

//components
import PHeader from '../components/PHeader'


class About extends React.Component {
    render() {
        const { data } = this.props
        const layout = this.props.layoutData
        const page = data.page
        const bg = page.frontmatter.wallpaper == null ? "" : page.frontmatter.wallpaper.childImageSharp.resize.src
        const Wallpaper = styled.div`
                background-image: url(${bg});
        `;

        //fetch sections
        const sectionslist = [];
        let i = 0;
        page.frontmatter.sections.forEach(section => {
            const image = section.image.childImageSharp.resize.src
            sectionslist.push(
                <Section
                key={section.title_ar}
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
                key={feature.title_ar}
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
                <title>{layout.title} | {page.frontmatter.title_ar}</title>
            </Helmet>
            <div className="content">
            <PHeader
            language="English"
            logo={layout.logo}
            menu={layout.menu}
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
                            <div className="page-content">
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
                                    color= "pink"
                                    image= "eye"
                                    image_type= "icon"
                                    header= {<h3>رؤيتنا</h3>}
                                    text= {<p>{page.frontmatter.vision_ar}</p>}
                                    />
                                    <Card 
                                    color="purple"
                                    image= "flag"
                                    image_type= "icon"
                                    header= {<h3>الرسالة</h3>}
                                    text= {<p>{page.frontmatter.mission_ar}</p>}
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
                    <br/>
                    {/* <div className="row">
                        <div className="col">
                            <div className="page-content">
                                <Headline title={layout.lang == 'en' ? "Our Team" : "الفريق"}/>
                                <div className="row">
                                {data.team.edges.map(({node}) => (
                                    <div className="col-sm-4 mb-4 team-card">
                                        <Card 
                                        color= ""
                                        image= {node.frontmatter.image.childImageSharp.resize.src}
                                        image_type= "img"
                                        header= {<h4>{node.frontmatter.name}</h4>}
                                        text= {<p>{node.frontmatter.role}</p>}
                                        footer={<Link className="btn btn-primary" to={node.frontmatter.path}>بطاقة العمل</Link>}
                                        />
                                    </div>
                                ))}
                                </div>
                            </div>
                        </div>
                    </div> */}
                        

                    </div>
                
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

export default About

export const aboutQuery = graphql`
    query AboutQueryAr {
        site{
            siteMetadata{
            title_ar
            }
        }
        page: markdownRemark(frontmatter:{slug: {eq:"about"}}){
            frontmatter {
            title_ar
            page_title_ar
            subtitle_ar
            description_ar
            vision_ar
            mission_ar
            sections_title_ar
            features_title_ar
            wallpaper {
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
        team: allMarkdownRemark(filter: {
              frontmatter: {
                type: { eq: "member"},
                langKey:{ eq: "ar"}
              },
            }) {
              edges {
                node {
                  frontmatter {
                    path
                    role
                    name
                    image {
                        childImageSharp {
                            resize (width: 500){
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