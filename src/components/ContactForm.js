import React from 'react'
import Link from 'gatsby-link'
import styled from "styled-components"



class ContactForm extends React.Component {
    constructor(props) {
        super(props)
    }

    

    render() {

        const Container = styled.div`
                padding-top: 10px;
                padding-bottom: 10px;
        `;

        const data = this.props

        return(
            <div className="form">
                <form method="POST" action={"https://formspree.io/" + data.sendTo}>
                    <div className="formm-group">
                        <label htmlFor="email">{data.emailLabel}</label>
                        <input type="email" className="form-control" name="email" id="email" placeholder={data.emailPlaceholder}/>
                    </div>
                    <br/>
                    <div className="form-group">
                        <label htmlFor="name">{data.nameLabel}</label>
                        <input type="text" className="form-control" name="name" id="name" placeholder={data.namePlaceholder}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">{data.messageLabel}</label>
                        <textarea className="form-control" id="message" name="message" placeholder={data.messagePlaceholder}/>
                    </div>
                    <button type="submit"name="submit" className="btn btn-success">{data.buttonText}</button>
                </form>
            </div>
        )
    }
}


export default ContactForm