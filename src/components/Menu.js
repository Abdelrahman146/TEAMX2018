import React from 'react'
import Link from 'gatsby-link'
import Zoom from 'react-reveal/Zoom';


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
            <Zoom delay={1500} duration={1500}>
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
            </Zoom>
        )
    }
}


export default TitleBox