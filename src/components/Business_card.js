import React from 'react'
import Link from 'gatsby-link'
import styled from "styled-components"

import Bc_header from './Bc_header'
import Bc_body from './Bc_body'

class Business_card extends React.Component {
    constructor(props) {
        super(props)
    }

    

    render() {
        const { data } = this.props
        const layout = this.props.layoutData
        const page = data.markdownRemark

        return(
            <div  id="business-card">
                <div className={"card business-card " + (layout.lang == 'ar' ? 'text-right':'')}>
                    
                    <Bc_header 
                    img= {page.frontmatter.image.childImageSharp.resize.src}
                    name= {page.frontmatter.name}
                    role= {page.frontmatter.role}
                    phone= {page.frontmatter.phone}
                    email= {page.frontmatter.email}
                    address= {page.frontmatter.address}
                    twitter= {page.frontmatter.socialMedia.twitter}
                    linkedin= {page.frontmatter.socialMedia.linkedin}
                    googleplus= {page.frontmatter.socialMedia.googleplus}
                    qrcode= {page.frontmatter.qr.childImageSharp.resize.src}
                    />
                    

                    <div className="row">
                    <button className="btn btn-primary bc-btn" data-toggle="collapse" data-target="#info" aria-expanded="true" aria-controls="collapseOne">
                        {layout.lang == 'en' ? 'More' : 'المزيد'}
                    </button>
                    </div>
                    <div id="info" className="collapse" aria-labelledby="headingOne" data-parent="#business-card">
                        <Bc_body
                        lang= {layout.lang}
                        bio= {page.frontmatter.bio}
                        qoute= {page.frontmatter.qoute}
                        interests = {page.frontmatter.interests}
                        />
                    </div>

                </div>
            </div>
        )
    }
}


export default Business_card