import React, { Component } from 'react';
import MyButton from '../UI/MyButtons';
import Zoom from 'react-reveal/Zoom';

class Pricing extends Component {

    state = {
        prices:['Project 1','Project 2','Project 3'],
        positions:['React APp ',' React APp ','React APp '],
        desc:[
            'its is a react app or a simple react app .. using material UI ,Coursal , nice touches ',
            'it is a reactapp using Redux ',
            'it is a reactapp using Fake api'
        ],
        linkto:['http://talented-border.surge.sh/','http://ethereal-sack.surge.sh/',' http://married-quarter.surge.sh/'],
        delay:[0,500,0]

    }

    showBoxes = () => (
        this.state.prices.map((box,i)=>(
            <Zoom delay={this.state.delay[i]} key={i}>
                <div className="pricing_item">
                    <div className="pricing_inner_wrapper">
                        <div className="pricing_title">
                            <span>{this.state.prices[i]}</span>
                            <span>{this.state.positions[i]}</span>
                        </div>
                        <div className="pricing_description">
                            {this.state.desc[i]}
                        </div>
                        <div className="pricing_buttons">
                            <MyButton
                                text="Show website"
                                bck="#ffa800"
                                color="#ffffff"
                                link={this.state.linkto[i]}
                            />
                        </div>
                    </div>
                </div>
            </Zoom>
        ))
       
    )

    render() {
        return (
            <div className="bck_black">
                <div className="center_wrapper pricing_section">
                    <h2>Projects</h2>

                    <div className="pricing_wrapper">
                        {this.showBoxes()}
                    </div>

                </div>
            </div>
        );
    }
}

export default Pricing;