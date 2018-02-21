import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import LazyLoad from 'react-lazyload'
import styled from "styled-components";
import GoogleMap from 'google-map-react'

//components
import PHeader from '../components/PHeader'
import Footer from '../components/Footer'
import Business_card from '../components/Business_card';


class Contact extends React.Component {

    render() {

        const { data } = this.props
        const layout = this.props.layoutData
        const page = data.markdownRemark
        const bg = page.frontmatter.wallpaper == null ? "" : page.frontmatter.wallpaper.childImageSharp.resize.src
        const Wallpaper = styled.div`
            background-image: url(${bg});
        `;

        return (
            <div>
            <Helmet>
                <title>{layout.title} | {page.frontmatter.name}</title>
            </Helmet>
            <div className="content">
            <PHeader
            language={layout.lang == 'en' ? "العربية" : "English"}
            logo={layout.logo}
            menu={layout.menu}
            />
            <div className="container-fluid">

            <Business_card {...this.props}/>

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

export default Contact

export const contactQuery = graphql`
    query MemberQuery($path: String!) {
        markdownRemark(frontmatter:{path: {eq: $path}}){
            frontmatter {
            name
            role
            phone
            email
            address
            qoute
            bio
            image {
                childImageSharp {
                    resize (width: 300){
                        src
                    }
                }
            }
            qr {
                childImageSharp {
                    resize (width: 150){
                        src
                    }
                }
            }
            wallpaper {
                childImageSharp {
                    resize (width: 1920){
                        src
                    }
                }
            }
            interests {
                title
                icon
            }
            socialMedia {
                twitter
                linkedin
                googleplus
            }
        }
        }
    }
`