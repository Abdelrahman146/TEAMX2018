import React from 'react'
import Link from 'gatsby-link'
//import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';


class PHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
          collapse: false,
          isWideEnough: false
        };
        this.onClick = this.onClick.bind(this);
      }
    
      onClick(){
        this.setState({
          collapse: !this.state.collapse,
        });
      }

    render() {

        const data = this.props
        const list = data.menu.map((item) =>
            <li className="nav-item">
                <Link className="nav-link" activeClassName="active" to={item.link}>{item.text}</Link>
            </li>
        );


        return (
            <div className="header">
                <nav className="navbar navbar-expand-md navbar-dark">
                    <Link className="navbar-brand" to={data.language == "العربية" ? "/en/" : "/ar/"}>
                        <img src={data.logo} alt="teamx logo"/>
                    </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to={data.language == "العربية" ? "/en/" : "/ar/"}>
                                {data.language == "العربية" ? "Home" : "الصفحة الرئيسية"}
                                </Link>
                            </li>
                            {list}
                            <li className="nav-item">
                                <Link className="btn btn-important langButton" to={data.language == "العربية" ? "/ar/" : "/en/"}>
                                    {data.language}
                                </Link>
                            </li>
                        </ul>
                        <span className="navbar-text">
                            
                        </span>
                    </div>
            </nav>
            </div>
        )
    }
}


export default PHeader