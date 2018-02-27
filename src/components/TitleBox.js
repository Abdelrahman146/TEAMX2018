import React from 'react'
import Link from 'gatsby-link'


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
                            <h1 className="title">{data.pageTitle}</h1>
                            <h4 className="subtitle">{data.pageSubtitle}</h4>
                            <p className="description">{data.pageDescription}</p>
                      </div>
                  </div>
            </div>
          </div>
        )
    }
}


export default TitleBox