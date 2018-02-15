import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import sortBy from 'lodash/sortBy'
import Helmet from 'react-helmet'
import LazyLoad from 'react-lazyload'

import TitleBox from '../components/TitleBox'

import teamx from '../images/teamx.png'
import abdel from '../images/team/abdel.jpg'
import member1 from '../images/team/member2.png'
import member2 from '../images/team/member2.jpg'


class Index extends React.Component {
    render() {

        return (
            <div>
            <div className="container-fluid">
            <TitleBox
            pageTitle="TEAMX IT Solutions"
            pageSubtitle="Your Technology is Always 10X Ahead"
            pageDescription="We Deliver The Latest and Best  IT Innovations To Make Dubai Technology Always 10X Ahead"
             />
            </div>
            </div>
        )
    }
}

export default Index