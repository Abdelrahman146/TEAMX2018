import React from 'react'
import Link from 'gatsby-link'

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
                <Link className="navbar-brand" to="/">
                    <img src={logo} alt="teamx logo"/>
                </Link>
                <span className="navbar-text">
                    Whatsapp: +971-123453432
                </span>
            </nav>
        </div>
        )
    }
}


export default Header