import React from 'react'
import Link from 'gatsby-link'

import Card from './Card'
import Headline from './Headline'

class Bc_body extends React.Component {
    constructor(props) {
        super(props)
    }

    

    render() {

        const data = this.props

        //fetch info
        const interestslist = [];
        data.interests.forEach(interest => {
            interestslist.push(
              <Card 
              color= "purple"
              image= {interest.icon}
              image_type= "icon"
              header= {<h4>{interest.title}</h4>}
              />
            )
          }
        )

        return(
            <div className="card-body page">

                <div className="page-content">
                    <div className="row">
                        <div className="col-sm-8">
                            <div class="jumbotron jumbotron-fluid bio">
                                <div class="container">
                                    <h2 class="display-5">{data.lang == 'en' ? 'About me' : 'من انا؟'}</h2>
                                    <p>{data.bio}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="card-deck">
                                <Card 
                                color= "pink"
                                image= "waves"
                                image_type= "icon"
                                header= {data.lang == 'en' ? <h4>My Life Motto</h4> : <h4>شعاري في الحياة</h4>}
                                text= {<p>{data.qoute}</p>}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="page-content">
                    <div className="row">
                        <div className="col">
                            <div className="page-content">
                                <Headline title={data.lang == 'en' ? 'My Interests' : 'إهتماماتي'}/>
                                <div className="card-deck">
                                    {interestslist}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}


export default Bc_body