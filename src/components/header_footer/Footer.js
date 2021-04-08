import React  from 'react';
import Fade from 'react-reveal/Fade';

const Footer = () => {
    return (
        <footer className="bck_red">
            <Fade delay={500}>
                <div className="font_righteous footer_logo_venue"></div>
                <div className="footer_copyright">
            <h6>my website 2018.All rights reserved.</h6>  
                </div>
               
            </Fade>
        </footer>
    );
};

export default Footer;