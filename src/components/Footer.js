
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
                    <li><a href={data.fb} target="_blank"><span className="typcn typcn-social-facebook-circular"></span></a></li>
                    <li><a href={data.inst}target="_blank"><span className="typcn typcn-social-instagram-circular"></span></a></li>
                    <li><a href={data.twt}target="_blank"><span className="typcn typcn-social-twitter-circular"></span></a></li>
                    <li><a href={data.ytb}target="_blank"><span className="typcn typcn-social-youtube-circular"></span></a></li>
                    <li><a href={data.gp}target="_blank"><span className="typcn typcn-social-google-plus-circular"></span></a></li>
                </ul>
                
                <p className="copyright" dangerouslySetInnerHTML={{ __html: data.text }}/>
            </div>
        )
    }
}


export default Footer