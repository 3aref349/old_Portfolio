import React from 'react';
import Zoom from 'react-reveal/Zoom';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import { green } from '@material-ui/core/colors';



import icon_calendar from '../../resources/images/icons/contact.png';
import icon_location from '../../resources/images/icons/share.png';
import icon_phone from '../../resources/images/icons/smartphone-call.png';
import icon_whatsapp from '../../resources/images/icons/whatsapp.png';

import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import EmailIcon from '@material-ui/icons/Email';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';


import { Link } from 'react-scroll';


const VunueNfo = () => {
    return (
        <div className="bck_white">
            <div className="center_wrapper">
                <div className="vn_wrapper">

                    <Zoom duration={500}>
                        <div className="vn_item">
                            <div className="vn_outer">
                                <div className="vn_inner">
                                    <div className="vn_icon_square bck_red"></div>
                                    <div 
                                        className="vn_icon"
                                        style={{
                                            background:`url(${icon_calendar})`
                                        }}
                                    ></div>
                                    <div className="vn_title" style={{color: 'red'}}>
                                        Contact me
                                    </div>
                                    <div className="vn_desc">
                                    <ul className="icons  ">
                                    <li className="iconss  ">  <PhoneAndroidIcon /> +0201115241016</li>

                                            <li className="iconss">  <PhoneAndroidIcon /> +0201013364443</li>
                                            <li className="iconss" > <EmailIcon /> mohamedaref349@gmail.com</li>
                                            <li className="iconss" >  <WhatsAppIcon /> 01115241016</li>


                                        </ul>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>

                    </Zoom>
                    
                    <Zoom duration={500} delay={500}>
                        <div className="vn_item">
                            <div className="vn_outer">
                                <div className="vn_inner">
                                    <div className="vn_icon_square bck_yellow"></div>
                                    <div 
                                        className="vn_icon"
                                        style={{
                                            background:`url(${icon_location})`
                                        }}
                                    ></div>
                                    <div className="vn_title" style={{color: 'yellow'}}>
Social media                                    </div>
                                    <div className="vn_desc">
                                    <ul className="icons  ">
                                            <li className="iconss "> <a href="https://www.facebook.com/mohamed.aref.14"> <span></span> <FacebookIcon /></a> </li>  
                                            <li className="iconss" > <a href="https://www.linkedin.com/in/mohammedaref/"> <LinkedInIcon /></a> </li>  
                                            <li className="iconss"> <a href=""> <TwitterIcon /></a> </li>  

                                        </ul>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Zoom>
                    
                </div>
            </div>
        </div>
    );
};

export default VunueNfo;