import React from 'react';

import Slider from "react-slick";

import slide_one from '../../resources/images/business-code-coding-computer-270360.jpg';
import slide_two from '../../resources/images/ideas-whiteboard-person-working-7369.jpg';
import slide_three from '../../resources/images/business-coffee-composition-computer-265667.jpg';


const Carrousel = () => {

    const settings = {
        dots: false,
        infinite:false,
        autoplay: true,
        speed: 500
    }

    return (
        <div 
        className="carrousel_wrapper"
        style={{
            background:'red',
            height:`${window.innerHeight}px`,
            overflow:'hidden'
        }}
        
        
        >
<Slider {...settings}>
                <div>
                   <div 
                        className="carrousel_image"
                        style={{
                            background:`url(${slide_one})`,
                            height:`${window.innerHeight}px`
                        }}
                   ></div>
                </div>
                <div>
                    <div 
                        className="carrousel_image"
                        style={{
                            background:`url(${slide_two})`,
                            height:`${window.innerHeight}px`
                        }}
                   ></div>
                </div>
                <div>
                    <div 
                        className="carrousel_image"
                        style={{
                            background:`url(${slide_three})`,
                            height:`${window.innerHeight}px`
                        }}
                   ></div>
                </div>
            </Slider>
            
            
        </div>
    );
};

export default Carrousel;