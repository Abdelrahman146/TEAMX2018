import React from 'react'
import Link from 'gatsby-link'
import styled from "styled-components"
import Fade from 'react-reveal/Fade'

class Headline extends React.Component {
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
            <Fade delay={1300}>
            <Container>
                <h1 className="headline">
                    {data.title}
                </h1>
            </Container>
            </Fade>
        )
    }
}


export default Headline