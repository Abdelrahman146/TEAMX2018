
import React from 'react'




class Footer extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const data = this.props

        let text = null 
        if( data.lang == "ar"){
            text = <p className="copyright">قام بتصميم و تطوير هذا الموقع فريق "تيم اكس" - 2018</p>
        } else {
            text = <p className="copyright">This Website is Designed and Developed By TEAMX - 2018</p>
        }

        return(
            <div className="footer text-center">
                <ul className="socialMedia">
                    <li><a href="/"><span className="typcn typcn-social-facebook-circular"></span></a></li>
                    <li><a href="/"><span className="typcn typcn-social-instagram-circular"></span></a></li>
                    <li><a href="/"><span className="typcn typcn-social-twitter-circular"></span></a></li>
                    <li><a href="/"><span className="typcn typcn-social-youtube-circular"></span></a></li>
                    <li><a href="/"><span className="typcn typcn-social-google-plus-circular"></span></a></li>
                </ul>
                {text}
            </div>
        )
    }
}


export default Footer