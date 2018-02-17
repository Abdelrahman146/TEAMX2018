import React from 'react'
import Link from 'gatsby-link'
import styled from "styled-components"



class Section extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const data = this.props

        let button = null

        if(data.btn_text != null) {
            button = <div className="card-footer">
                        <Link className="btn btn-primary" to={data.btn_link}>{data.btn_text}</Link>
                    </div>
        }else {
            button = ""
        }
        return(
            <section>
                <h1 className="headline">{data.title}</h1>
                <div className="row">
                    <div className="col-sm-5">
                        <img src={data.image} alt={data.image_alt}/>
                    </div>
                    <div className="align-middle col-sm-7">
                        <div className=" card">
                            <div className="card-body align-middle">
                                <div className="card-text">
                                <p className="">
                                    {data.description}
                                </p>
                                </div>
                            </div>
                            {button}
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}


export default Section