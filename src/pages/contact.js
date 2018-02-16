import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import sortBy from 'lodash/sortBy'
import Helmet from 'react-helmet'
import LazyLoad from 'react-lazyload'
import styled from "styled-components";

//components
import Header from '../components/Header'
import Footer from '../components/Footer'
import TitleBox from '../components/TitleBox'

import teamx from '../images/teamx.png'
import web from '../images/services/web.png'
import mob from '../images/services/mob.png'
import marketing from '../images/services/marketing.png'


class Contact extends React.Component {
    render() {
        
        return (
            <div>
            <div className="content">
            <Header
            language="العربية"
            />
            <div className="container-fluid">
            <TitleBox
            pageTitle="Contact us"
            pageSubtitle="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.."
            pageDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent bibendum sapien vitae metus convallis condimentum."
             />
            <div className="row">
                <div className="col-sm">
                    <div className="page">
                        <section>
                        <h1 className="headline">Cotact Form</h1>
                        <div className="card">
                            <div className="card-body">
                            <form>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Name</label>
                                <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Name"/>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Message</label>
                                <textarea class="form-control" id="exampleInputPassword1" placeholder="Write Your Message Here"/>
                            </div>
                            <button type="submit" class="btn btn-primary">Send</button>
                            </form>
                            </div>
                        </div>
                        </section>
                        <section>
                        <h1 className="headline">Contact Info</h1>
                        <div class="card-deck">
                            <div class="card">
                                <div class="card-body text-center">
                                <h4 class="card-title">Email</h4>
                                <p class="card-text">
                                    Ask@teamx.ae
                                </p>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-body text-center">
                                <h4 class="card-title">Phone</h4>
                                <p class="card-text">
                                +971-123456789    
                                </p>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-body text-center">
                                <h4 class="card-title">Address</h4>
                                <p class="card-text">
                                    Dubai, UAE
                                </p>
                                </div>
                            </div>
                        </div>
                        </section>
                    </div>
                </div>
            </div>
          </div>
          <Footer />
        </div>
        <div id="bg"></div>
            </div>
        )
    }
}

export default Contact