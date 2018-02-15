import React from 'react'
import Link from 'gatsby-link'

// images
import logo from '../images/team-x-logo.png';


class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const data = this.props
        return(
            <div className="header">
            <nav class="navbar navbar-light">
                <Link class="navbar-brand" to="/">
                    <img src={logo} alt="teamx logo"/>
                </Link>
                <span class="navbar-text">
                    Whatsapp: +971-123453432
                </span>
            </nav>
        </div>
        )
    }
}


export default Header