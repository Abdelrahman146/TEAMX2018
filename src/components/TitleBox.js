import React from 'react'
import Link from 'gatsby-link'

// images
import logo from '../images/team-x-logo.png';


class TitleBox extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const data = this.props
        return(
            <div className="row">
            <div className="col-sm">
                  <div className="title-box">
                      <div className="inner-box">
                          <h1 className="title display-3">{data.pageTitle}</h1>
                          <h4 className="subtitle">{data.pageSubtitle}</h4>
                          <p className="description">{data.pageDescription}</p>
                      </div>
                      <nav>
                          <ul>
                              <li><Link to="/about">About us</Link></li>
                              <li><Link to="/services">Services</Link></li>
                              <li><Link to="/products">Products</Link></li>
                              <li><Link to="/contact">Contact us</Link></li>
                              <li><Link to="/consultation">Consultation</Link></li>
                              <li><Link to="/blog">Blog</Link></li>
                          </ul>
                      </nav>
                  </div>
            </div>
          </div>
        )
    }
}


export default TitleBox