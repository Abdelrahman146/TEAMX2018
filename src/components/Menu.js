import React from 'react'
import Link from 'gatsby-link'



class TitleBox extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const data = this.props
        let menu = null 
        if( data.lang == 'ar'){
            menu = 
            <ul>
            <li><Link to="/ar/about">من نحن</Link></li>
            <li><Link to="/ar/services">خدماتنا</Link></li>
            <li><Link to="/ar/contact">تواصل معنا</Link></li>
            <li><Link to="/ar/blog">المدونة</Link></li>
            </ul>
        } else {
            menu = 
            <ul>
            <li><Link to="/en/about">About us</Link></li>
            <li><Link to="/en/services">Services</Link></li>
            <li><Link to="/en/contact">Contact us</Link></li>
            <li><Link to="/en/blog">Blog</Link></li>
            </ul>
        }
        return(
            <div className="row">
            <div className="col-sm">
                  <div className="title-box">
                      <nav>
                          {menu} 
                      </nav>
                  </div>
            </div>
          </div>
        )
    }
}


export default TitleBox