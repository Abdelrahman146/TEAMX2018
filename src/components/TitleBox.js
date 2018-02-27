import React from 'react'
import Link from 'gatsby-link'
import Fade from 'react-reveal/Fade'


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
                          <Fade top delay={1000}>
                            <h1 className="title">{data.pageTitle}</h1>
                            <h4 className="subtitle">{data.pageSubtitle}</h4>
                            <p className="description">{data.pageDescription}</p>
                          </Fade>
                      </div>
                  </div>
            </div>
          </div>
        )
    }
}


export default TitleBox