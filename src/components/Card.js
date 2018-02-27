import React from 'react'
import Link from 'gatsby-link'
import styled from "styled-components"


class Card extends React.Component {
    constructor(props) {
        super(props)
    }

    

    render() {
        const data = this.props

        let img = null
        if(data.image_type == 'icon') {
            img = <span className={"card-icon typcn typcn-" + data.image}></span>
        }else {
            img = <img className='card-img-top'src={data.image} alt={data.image_alt}/>

        }

        let footer = null
        if(data.footer != null) {
            footer = <div className="card-footer">
                        {data.footer}
                     </div>
        }else {
            footer = ""
        }
        return(
            <div key={data.key} className={"card card-" + data.color}>
                {img}
                <div className="text-center card-content">
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