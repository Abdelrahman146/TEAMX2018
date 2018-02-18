
import React from 'react'




class Footer extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const data = this.props
        return(
            <div className="footer text-center">
                <ul className="socialMedia">
                    <li><a href="/"><span className="typcn typcn-social-facebook-circular"></span></a></li>
                    <li><a href="/"><span className="typcn typcn-social-instagram-circular"></span></a></li>
                    <li><a href="/"><span className="typcn typcn-social-twitter-circular"></span></a></li>
                    <li><a href="/"><span className="typcn typcn-social-youtube-circular"></span></a></li>
                    <li><a href="/"><span className="typcn typcn-social-google-plus-circular"></span></a></li>
                </ul>
                <p className="copyright">This Website is Designed and Developed By TEAMX - 2018</p>
            </div>
        )
    }
}


export default Footer