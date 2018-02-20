import React from 'react'
import Link from 'gatsby-link'
import styled from "styled-components"


class Subscribe extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            email: '',
            formErrors: {email: '', message: ''},
            emailValid: false,
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

        switch(fieldName) {
          case 'email':
            emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
            fieldValidationErrors.email = emailValid ? '' : ' is invalid';
            break;
          default:
            break;
        }
        this.setState({ formErrors: fieldValidationErrors,
                        emailValid: emailValid,
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
            <div className={"mb-5 form form-header form-header-" + data.lang}>
                <div className="panel panel-default validation-panel">
                    <RenderErrors errors={this.state.formErrors} />
                </div>
                <form className="form-inline" method="POST" action={"https://formspree.io/" + data.sendTo} target="_blank">
                    <div class="input-group">
                        <input type="email" required className="form-control" name="email" id="email" 
                        placeholder={data.emailPlaceholder}
                        value={this.state.email}
                        onChange={this.handleUserInput}
                        />
                        <input type="hidden" name="Purpose" value="I would like to subscribe to TEAMX blog" />
                        <div class="input-group-append">
                            <button type="submit" className="btn inline-form-button"  
                            onClick={ () => navigateTo(data.redirect)}>{data.buttonText}</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}


export default Subscribe
