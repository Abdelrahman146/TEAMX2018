
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
                    <li><a href={data.fb}><span className="typcn typcn-social-facebook-circular"></span></a></li>
                    <li><a href={data.inst}><span className="typcn typcn-social-instagram-circular"></span></a></li>
                    <li><a href={data.twt}><span className="typcn typcn-social-twitter-circular"></span></a></li>
                    <li><a href={data.ytb}><span className="typcn typcn-social-youtube-circular"></span></a></li>
                    <li><a href={data.gp}><span className="typcn typcn-social-google-plus-circular"></span></a></li>
                </ul>
                <p className="copyright">{data.text}</p>
            </div>
        )
    }
}


export default Footer