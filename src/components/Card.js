import React from 'react'
import Link from 'gatsby-link'
import styled from "styled-components"



class Card extends React.Component {
    constructor(props) {
        super(props)
    }

    

    render() {
        const data = this.props
        let footer = null
        if(data.footer != null) {
            footer = <div className="card-footer">
                        {data.footer}
                     </div>
        }else {
            footer = ""
        }
        return(
            <div className={"card card-" + data.color}>
                <img className={data.image_type == 'icon' ? 'card-img-top icon' : 'card-img-top'} src={data.image} alt={data.image_alt}/>
                <div className="text-center">
                    <div className="card-header">
                        {data.header}
                    </div>
                    <div className="card-body">
                        {data.text}
                    </div>
                    {footer}
                </div>
            </div>
        )
    }
}


export default Card