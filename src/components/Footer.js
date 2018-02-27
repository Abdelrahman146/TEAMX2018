
import React from 'react'
import Fade from 'react-reveal/Fade'



class Footer extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const data = this.props

        return(
            <Fade bottom>
            <div className="footer text-center">
                
                <ul className="socialMedia">
                    <li><a href={data.fb} target="_blank"><span className="typcn typcn-social-facebook-circular"></span></a></li>
                    <li><a href={data.inst}target="_blank"><span className="typcn typcn-social-instagram-circular"></span></a></li>
                    <li><a href={data.twt}target="_blank"><span className="typcn typcn-social-twitter-circular"></span></a></li>
                    <li><a href={data.ytb}target="_blank"><span className="typcn typcn-social-youtube-circular"></span></a></li>
                    <li><a href={data.gp}target="_blank"><span className="typcn typcn-social-google-plus-circular"></span></a></li>
                </ul>
                
                <p className="copyright">{data.text}</p>
            </div>
            </Fade>
        )
    }
}


export default Footer