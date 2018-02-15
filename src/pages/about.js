import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import sortBy from 'lodash/sortBy'
import Helmet from 'react-helmet'
import LazyLoad from 'react-lazyload'

import TitleBox from '../components/TitleBox'

import teamx from '../images/teamx.png'
import abdel from '../images/team/abdel.jpg'
import member1 from '../images/team/member1.jpg'
import member2 from '../images/team/member2.jpg'

import original from '../images/features/original.png'
import tech from '../images/features/tech.png'


class About extends React.Component {
    render() {

        return (
            <div>
            <div className="container-fluid">
            <TitleBox 
            pageTitle= "About us"
            />
            <div className="row">
                <div className="col-sm">
                    <div className="page">
                        <section>
                        <h1 className="headline">Who We Are ?</h1>
                        <div className="card">
                            <div className="card-body">
                            <div className="row">
                                <div className="col-sm-4">
                                    <img src={teamx} alt="teamx-logo"/>
                                </div>
                                <div className="align-middle col-sm-8">
                                    <div className="card-text">
                                    <p className="text-justify">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla aliquam dolor, eget euismod lorem semper vel. Nulla molestie odio ipsum, a hendrerit diam hendrerit quis. Pellentesque turpis dolor, viverra in nisl vitae, consequat malesuada ante. Duis at neque ipsum. Integer gravida lacus lorem, vel venenatis lectus consequat eu. Vivamus placerat augue erat, in euismod neque maximus id. Ut maximus dignissim ipsum quis vulputate. Vestibulum eu ex facilisis, accumsan quam vitae, pellentesque mauris. Praesent tincidunt lobortis arcu, vitae finibus lacus bibendum at. Quisque mollis enim ac libero mattis sodales. Praesent tincidunt elit non tellus porttitor hendrerit. Mauris metus ante, feugiat mollis sem at, malesuada tincidunt mauris. Nunc facilisis vulputate erat. Pellentesque vehicula a massa et aliquam. 
                                    </p>
                                    <Link className="btn btn-primary" href="#">Ask</Link>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </section>
                        <section>
                        <h1 className="headline">Choose Us If You Are Looking For</h1>
                        <div class="card-group">
                            <div class="card">
                                <img class="card-img-top icon" src={original} alt="Card image cap"/>
                                <div class="card-body text-center">
                                <h4 class="card-title">Originality</h4>
                                <p class="card-text">
                                Vivamus mattis turpis nisl, eu imperdiet eros rutrum in. Ut vestibulum elit consequat, ornare augue id, pretium libero.     
                                </p>
                                </div>
                            </div>
                            <div class="card">
                                <img class="card-img-top icon" src={tech} alt="Card image cap"/>
                                <div class="card-body text-center">
                                <h4 class="card-title">10X Ahead Technology</h4>
                                <p class="card-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dignissim facilisis magna quis ultricies. Vestibulum sit amet porttitor neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut sit amet sagittis urna, finibus fermentum nibh.                                    </p>
                                </div>
                            </div>
                            <div class="card">
                                <img class="card-img-top icon" src={tech} alt="Card image cap"/>
                                <div class="card-body text-center">
                                <h4 class="card-title">10X Ahead Technology</h4>
                                <p class="card-text">
                                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut sit amet sagittis urna, finibus fermentum nibh.                                </p>
                                </div>
                            </div>
                        </div>
                        </section>
                        <section>
                        <h1 className="headline">Our Team</h1>
                        <div className="card-deck">
                                <div className="card member-card">
                                <img class="card-img-top personal-img" src={abdel} alt="Card image cap"/>
                                    <div className="card-body text-center">
                                    <h4 class="card-title">Abdel Rahman</h4>
                                    <div className="card-text">
                                    <p className="text-muted">
                                        <strong>Web Developer</strong>
                                    </p>
                                    </div>
                                    
                                    </div>
                                    <div className="card-footer">
                                    <Link className="btn btn-primary btn-block" href="#">Info</Link>
                                    </div>
                                </div>
                                <div className="card member-card">
                                <img class="card-img-top personal-img" src={member2} alt="Card image cap"/>
                                    <div className="card-body text-center">
                                    <h4 class="card-title">Member Name</h4>
                                    <div className="card-text">
                                    <p className="text-muted">
                                        <strong>Member Position</strong>
                                    </p>
                                    </div>
                                    </div>
                                    <div className="card-footer">
                                    <Link className="btn btn-primary btn-block" href="#">Info</Link>
                                    </div>
                                </div>
                                <div className="card member-card">
                                <img class="personal-img" src={member1} alt="Card image cap"/>
                                    <div className="card-body text-center">
                                    <h4 class="card-title">Member name</h4>
                                    <div className="card-text">
                                    <p className="text-muted">
                                        <strong>Member position</strong>
                                    </p>
                                    </div>
                                    </div>
                                    <div className="card-footer">
                                    <Link className="btn btn-primary btn-block" href="#">Info</Link>
                                    </div>
                                </div>
                        </div>
                        </section>
                    </div>
                </div>
            </div>
          </div>
            </div>
        )
    }
}

export default About