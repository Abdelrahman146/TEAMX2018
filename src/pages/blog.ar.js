import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import sortBy from 'lodash/sortBy'
import Helmet from 'react-helmet'
import LazyLoad from 'react-lazyload'
import styled from "styled-components";

//components
import Header from '../components/Header'
import Footer from '../components/Footer'
import TitleBox from '../components/TitleBox'
import Menu from '../components/Menu'
import Subscribe from '../components/Subscribe'



class Blog extends React.Component {
    
    render() {
        
        const { data } = this.props
        const layout = this.props.layoutData
        const page = data.markdownRemark
        const Wallpaper = styled.div`
               
        `;
        return (
            <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>مدونة تيم إكس</title>
            </Helmet>

            <div className="content">
            <Header
            language="English"
            logo={layout.logo}
            />
            <div className="container-fluid">
            <TitleBox
            pageTitle="أهلا بمكم في مدونة تيم إكس :)"
            pageSubtitle="زورونا قريبا"
            pageDescription="we are currently Developing our amazing blog. Please send us your email if you want to be notified when we publish our first post"
            pageDescription="حاليا نحن نعمل على تطوير مدونتنا، من فضلك ارسل لنا بريدك الالكتروني اذا كنت تريد ان  نعلمك عن اول مقالة ننشرها"
             />

             <div className="row">
             <Subscribe
             sendTo = {page.frontmatter.email}
             lang = {layout.lang}
             emailPlaceholder = "example@domain.com"
             redirect = "/"
             buttonText = "أرسل"
             />
             </div>

             <Menu 
             lang={layout.lang}
             menu={layout.menu}
            />
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

export default Blog

export const blogQuery = graphql`
    query BlogQueryAr {
        markdownRemark(frontmatter:{slug: {eq:"contact"}}){
            frontmatter {
                email
            }
        }
    }
`