import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import sortBy from 'lodash/sortBy'
import Helmet from 'react-helmet'
import LazyLoad from 'react-lazyload'
import styled from "styled-components";
import GoogleMap from 'google-map-react'

//components
import PHeader from '../components/PHeader'
import Footer from '../components/Footer'
import TitleBox from '../components/TitleBox'
import ContactForm from '../components/ContactForm'
import Headline from '../components/Headline'
import Card from '../components/Card'


import abdel from '../images/team/abdel.jpg'


class Contact extends React.Component {

    render() {

        const { data } = this.props
        const layout = this.props.layoutData
        const page = data.markdownRemark
        const bg = page.frontmatter.cover == null ? "" : page.frontmatter.cover.childImageSharp.resize.src
        const Cover = styled.div`
            background-image: url(${bg});
        `;

        //fetch info
        const interestslist = [];
        page.frontmatter.interests.forEach(interest => {
            interestslist.push(
              <Card 
              color= "purple"
              image= {interest.icon}
              image_type= "icon"
              header= {<h4>{interest.title}</h4>}
              />
            )
          }
        )

        return (
            <div>
            <Helmet>
                <title>{layout.title} | {page.frontmatter.name}</title>
            </Helmet>
            <div className="content">
            <PHeader
            language="العربية"
            logo={layout.logo}
            menu={layout.menu}
            />
            <div className="container-fluid">


                <div  id="business-card">
                    <div className="card business-card">
                        <div className="card-header bc-header" id="headingOne">
                            <div className="row">
                                <div className="col-sm-3">
                                    <img src={page.frontmatter.image.childImageSharp.resize.src} alt="..." className="rounded mx-auto d-block img-thumbnail"/>
                                </div>
                                <div className="col-sm-7">
                                    <div className="row">
                                        <div class="col-sm-6 bc-personal-info">
                                            <h1>{page.frontmatter.name}</h1>
                                            <p class="">
                                            <span className="typcn typcn-heart"></span> {page.frontmatter.role} 
                                            </p>
                                            <div className="bc-info">
                                                <h5>Info: </h5>
                                                <ul className="list-unstyled">
                                                    <li><span class="typcn typcn-phone"></span> {page.frontmatter.phone}</li>
                                                    <li><span class="typcn typcn-social-at-circular"></span> {page.frontmatter.email }</li>
                                                    <li><span class="typcn typcn-home"></span> {page.frontmatter.address }</li>
                                                </ul>
                                                <ul className="list-inline bc-sm">
                                                    <li className="list-inline-item"><a target="_blank" href={page.frontmatter.socialMedia.twitter}><span className="typcn typcn-social-twitter-circular"></span></a></li>
                                                    <li className="list-inline-item"><a target="_blank" href={page.frontmatter.socialMedia.linkedin}><span className="typcn typcn-social-linkedin-circular"></span></a></li>
                                                    <li className="list-inline-item"><a target="_blank" href={page.frontmatter.socialMedia.googleplus}><span className="typcn typcn-social-google-plus-circular"></span></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 align-middle">
                                            
                                            <img src={page.frontmatter.qr.childImageSharp.resize.src} alt="..." className="rounded mx-auto d-block img-thumbnail mt-3"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div className="row">
                        <button className="btn btn-primary bc-btn" data-toggle="collapse" data-target="#info" aria-expanded="true" aria-controls="collapseOne">More Info</button>
                        </div>
                        <div id="info" className="collapse show" aria-labelledby="headingOne" data-parent="#business-card">
                        <div className="card-body page">

                            <div className="page-content">
                            <div className="row">
                                <div className="col-sm-8">
                                <div class="jumbotron jumbotron-fluid bio">
                                <div class="container">
                                    <h2 class="display-5">Profissional Bio</h2>
                                    <p>{page.frontmatter.bio}</p>
                                </div>
                                </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="card-deck">
                                    <Card 
                                    color= "pink"
                                    image= "waves"
                                    image_type= "icon"
                                    header= {<h4>Life Motto</h4>}
                                    text= {<p>{page.frontmatter.qoute}</p>}
                                    />
                                    </div>
                                </div>
                            </div>
                            </div>
                            
                            <div className="page-content">
                            <div className="row">
                                <div className="col">
                                    <div className="page-content">
                                        <Headline title={page.frontmatter.interests_title}/>
                                        <div className="card-deck">
                                            {interestslist}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>

                        </div>
                        </div>
                    </div>
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
        <Cover id="bg"></Cover>
            </div>
        )
    }
}

export default Contact

export const contactQuery = graphql`
    query MemberQuery {
        markdownRemark(frontmatter:{path: {eq:"/en/member/abdelrahman"}}){
            frontmatter {
            name
            role
            phone
            email
            address
            qoute
            image {
                childImageSharp {
                    resize (width: 300) {
                        src
                    }
                }
            }
            qr {
                childImageSharp {
                    resize (width: 150) {
                        src
                    }
                }
            }
            bio
            interests_title
            interests {
                title
                icon
            }
            socialMedia {
                twitter
                linkedin
                googleplus
            }
            cover {
                childImageSharp {
                    resize (width: 1920) {
                        src
                    }
                }
            }
        }
        }
    }
`