import React from 'react'
import Link from 'gatsby-link'
import styled from "styled-components"

class ContactForm extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            email: '',
            name: '',
            message: '',
            formErrors: {email: '', message: ''},
            emailValid: false,
            messageValid: false,
            formValid: false
        }
    }
    
    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value},
                      () => { this.validateField(name, value) });
    }
    
    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let messageValid = this.state.messageValid;

        switch(fieldName) {
          case 'email':
            emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
            fieldValidationErrors.email = emailValid ? '' : ' is invalid';
            break;
          case 'message':
            messageValid = value.length > 10;
            fieldValidationErrors.name = messageValid ? '': ' is empty or too short';
            break;
          default:
            break;
        }
        this.setState({ formErrors: fieldValidationErrors,
                        emailValid: emailValid,
                        messageValid: messageValid
                      }, this.validateForm);
    }
    
    validateForm() {
        this.setState({formValid: this.state.emailValid && this.state.messageValid});
    }
    
    errorClass(error) {
        return(error.length === 0 ? '' : 'has-error');
    }
    

    render() {

        const data = this.props
        const RenderErrors = ({errors}) => (
                <div className='formErrors'>
                    {Object.keys(errors).map((fieldName, i) => {
                    if(errors[fieldName].length > 0){
                        return (
                        <p key={i}><span className="typcn typcn-info-large"></span> {fieldName} {errors[fieldName]}</p>
                        )        
                    } else {
                        return '    ';
                    }
                    })}
                </div> 
        )
        return(
            <div className={"form form-primary-" + data.lang}>
                <div className="panel panel-default validation-panel">
                    <RenderErrors errors={this.state.formErrors} />
                </div>
                <form method="POST" action={"https://formspree.io/" + data.sendTo} target="_blank">
                    <div className="form-group">
                        <label htmlFor="email">{data.emailLabel}</label>
                        <input type="email" required className="form-control" name="email" id="email" 
                        placeholder={data.emailPlaceholder}
                        value={this.state.email}
                        onChange={this.handleUserInput}
                        />
                    </div>
                    <br/>
                    <div className="form-group">
                        <label htmlFor="name">{data.nameLabel}</label>
                        <input type="text" className="form-control" name="name" id="name" 
                        value={this.state.name}
                        onChange={this.handleUserInput}
                        placeholder={data.namePlaceholder}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">{data.messageLabel}</label>
                        <textarea className="form-control" id="message" name="message" 
                        value={this.state.message}
                        onChange={this.handleUserInput}
                        placeholder={data.messagePlaceholder}/>
                    </div>
                    <button type="submit" className="btn btn-important"  
                    onClick={ () => navigateTo(data.redirect)}
                    disabled={!this.state.formValid}>{data.buttonText}</button>
                </form>
            </div>
        )
    }
}


export default ContactForm