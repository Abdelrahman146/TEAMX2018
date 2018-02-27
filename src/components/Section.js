import React from 'react'
import Link from 'gatsby-link'
import styled from "styled-components"


class Section extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const data = this.props

        const Image = styled.div`
            background: linear-gradient(
                -45deg,
                rgba(118, 82, 161, 0.65),
                rgba(204, 78, 156, 0.45)
            ),
            url(${data.image});
            width: 100%;
            height: 350px;
            background-position:center;
            background-size:cover;
            background-repeat:no-repeat;
            border-radius: 5px;
            box-shadow: 0 0px 5px rgba(118, 82, 161, 0.65), 0 0px 24px rgba(204, 78, 156, 0.45);
            @media (max-width: 375px) {
                height:200px;
              }
        `;

        let button = null

        if (data.btn_text != null) {
            button = <div className="card-footer">
                <Link className="btn btn-primary" to={data.btn_link}>{data.btn_text}</Link>
            </div>
        } else {
            button = ""
        }

        let image = null
        if (data.imageTransparent == true) {
            image = <img src={data.image} alt={data.image_alt} />
        } else {
            image = <Image className="diffused-shadow" />
        }

        return (
            <section key={data.key}>

                <div className="row">
                        <div className={data.order % 2 == 0 ? 'col-sm-5 align-middle' : 'col-sm-5 align-middle order-sm-2'}>
                            <div className="section-image">
                                {image}
                            </div>
                        </div>
                        <div className={data.order % 2 == 0 ? 'col-sm-7 align-middle' : 'col-sm-7 align-middle order-sm-1'}>
                            <div className="card section-content">
                                <div className="card-header">
                                    <h2 className="text-center">{data.title}</h2>
                                </div>
                                <div className="card-body align-middle">
                                    <p className="">
                                        {data.description}
                                    </p>
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
