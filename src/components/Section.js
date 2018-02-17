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
                
                <div className="row">
                    <div className={data.order%2 == 0 ? 'col-sm-5 align-middle' : 'col-sm-5 align-middle order-sm-2'}>
                        <div className="section-image">
                            <img src={data.image} alt={data.image_alt}/>
                        </div>
                    </div>
                    <div className={data.order%2 == 0 ? 'col-sm-7 align-middle' : 'col-sm-7 align-middle order-sm-1'}>
                        <div className="card section-content">
                            <div className="card-body">
                                <div className="card-header">
                                    <h2 className="text-center">{data.title}</h2>
                                </div>
                                <div className="card-text">
                                <p className="">
                                    {data.description}
                                </p>
                                </div>
                                {button}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}


export default Section