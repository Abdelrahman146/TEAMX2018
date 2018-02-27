import React from 'react'
import Link from 'gatsby-link'


class TitleBox extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const data = this.props

        const list = data.menu.map((item) =>
                <li>
                    <Link to={item.link}>{item.text}</Link>
                </li>
        );
        
        return(
            <div className="row">
            <div className="col-sm">
                <div className="title-box">
                      <nav>
                          <ul className={data.lang == 'ar' ? 'nav-ar' : 'nav-en'}>
                              {list}
                          </ul>
                      </nav>
                  </div>
            </div>
          </div>
        )
    }
}


export default TitleBox