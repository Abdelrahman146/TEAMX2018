
import React from 'react'

// images
import twitter from '../images/sm/twitter.png';
import fb from '../images/sm/fb.png';
import googleplus from '../images/sm/google.png';
import insta from '../images/sm/insta.png';
import youtube from '../images/sm/youtube.png';


class Footer extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const data = this.props
        return(
            <div className="footer text-center">
                <ul className="socialMedia">
                    <li><a href="/"><img src={twitter} alt="twitter"/></a></li>
                    <li><a href="/"><img src={fb} alt="facebook"/></a></li>
                    <li><a href="/"><img src={insta} alt="instagram"/></a></li>
                    <li><a href="/"><img src={youtube} alt="youtube"/></a></li>
                    <li><a href="/"><img src={googleplus} alt="googleplus"/></a></li>
                </ul>
                <p className="copyright">This Website is Designed and Developed By TEAMX - 2018</p>
            </div>
        )
    }
}


export default Footer