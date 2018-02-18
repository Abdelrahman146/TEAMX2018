import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import sortBy from 'lodash/sortBy'
import Helmet from 'react-helmet'
import LazyLoad from 'react-lazyload'
import styled from "styled-components";
import GoogleMap from 'google-map-react'

//components
import Header from '../components/Header'
import Footer from '../components/Footer'
import TitleBox from '../components/TitleBox'
import ContactForm from '../components/ContactForm'
import Headline from '../components/Headline'
import Card from '../components/Card'



class Contact extends React.Component {

    static defaultProps = {
        center: {lat: 59.95, lng: 30.33},
        zoom: 11
      };

    render() {

        const { data } = this.props
        const metadata = data.site.siteMetadata
        const page = data.markdownRemark
        const bg = page.frontmatter.cover == null ? "" : page.frontmatter.cover.childImageSharp.resize.src
        const Cover = styled.div`
                background-image: url(${bg});
        `;

        //fetch info
        const infolist = [];
        page.frontmatter.info.forEach(info => {
            infolist.push(
              <Card 
              color= "purple"
              image= {info.icon}
              image_type= "icon"
              header= {<h4>{info.title_en}</h4>}
              text= {<p>{info.content_en}</p>}
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
            pageTitle= {page.frontmatter.page_title_en}
            pageSubtitle={page.frontmatter.subtitle_en}
            pageDescription={page.frontmatter.description_en}
             />
            <div className="row">
                <div className="col-sm">
                    <div className="page">

                        <div className="map">
                            <GoogleMap
                            bootstrapURLKeys={{ key: ['AIzaSyA6GNEZY4PxhcDWj4uN-1oR9_-CzJ5BMKc']}}
                            defaultCenter= {this.props.center}
                            defaultZoom= {11}
                            />
                        </div>
                        
                        <div className="page-content">
                            <div className="row">
                                <div className="col">
                                <h1 className="headline">Cotact Form</h1>
                                    <ContactForm 
                                    sendTo={page.frontmatter.email}
                                    emailLabel="Email"
                                    emailPlaceholder="Example@domain.com"
                                    nameLabel="Name"
                                    namePlaceholder="Your Name"
                                    messageLabel="Message"
                                    messagePlaceholder="I would like to know more about TEAMX"
                                    buttonText="Send"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col">
                                <div className="page-content">
                                    <Headline title={page.frontmatter.info_title_en}/>
                                    <div className="card-deck">
                                        {infolist}
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
        <div id="bg"></div>
            </div>
        )
    }
}

export default Contact

export const contactQuery = graphql`
    query ContactQuery {
        site{
            siteMetadata{
            title
            }
        }
        markdownRemark(frontmatter:{slug: {eq:"contact"}}){
            frontmatter {
            title_en
            page_title_en
            subtitle_en
            description_en
            email
            cover {
                childImageSharp {
                    resize (width: 1920){
                        src
                    }
                }
            }
            info {
                title_en
                icon 
                content_en
            }
        }
        }
    }
`