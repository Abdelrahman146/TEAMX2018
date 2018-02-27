import React from 'react'
import Link from 'gatsby-link'
import Slide from 'react-reveal/Slide'
import Zoom from 'react-reveal/Zoom';
// images
import logo from "../images/logo.png";


class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const data = this.props
        return(
            <div className="header">
            <nav className="navbar navbar-light">
                <Zoom>
                    <Link className="navbar-brand" to={data.language == "العربية" ? "/en/" : "/ar/"}>
                        <img src={data.logo} alt="teamx logo"/>
                    </Link>
                </Zoom>
                <Slide top>
                    <span className="btn btn-important langButton">
                        <Link className="text-light" to={data.language == "العربية" ? "/ar/" : "/en/"}>
                        {data.language}
                        </Link>
                    </span>
                </Slide>
            </nav>
        </div>
        )
    }
}


export default Header