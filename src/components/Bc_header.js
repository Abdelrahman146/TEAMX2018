import React from 'react'
import Link from 'gatsby-link'



class Bc_header extends React.Component {
    constructor(props) {
        super(props)
    }

    

    render() {

        const data = this.props

        return(
            <div className="card-header bc-header" id="headingOne">
                <div className="row">
                    <div className="col-sm-3">
                        <img src={data.img} alt={data.name} className="mx-auto d-block img-thumbnail mt-3"/>
                    </div>
                    <div className="col-sm-7">
                        <div className="row mt-3">
                            <div class="col-sm-6 bc-personal-info">
                                <h1>{data.name}</h1>
                                <p class="">
                                    <span className="typcn typcn-heart"></span> {data.role} 
                                </p>
                                <div className="bc-info">
                                    <ul className="list-unstyled">
                                        <li><span class="typcn typcn-phone"></span> {data.phone}</li>
                                        <li><span class="typcn typcn-social-at-circular"></span> {data.email}</li>
                                        <li><span class="typcn typcn-home"></span> {data.address }</li>
                                    </ul>
                                    <ul className="list-inline bc-sm">
                                        <li className="list-inline-item"><a target="_blank" href={data.twitter}><span className="typcn typcn-social-twitter-circular"></span></a></li>
                                        <li className="list-inline-item"><a target="_blank" href={data.linkedin}><span className="typcn typcn-social-linkedin-circular"></span></a></li>
                                        <li className="list-inline-item"><a target="_blank" href={data.googleplus}><span className="typcn typcn-social-google-plus-circular"></span></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-6 align-middle">
                                <img src={data.qrcode} alt="QrCode" className="rounded mx-auto d-block img-thumbnail mt-3"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Bc_header