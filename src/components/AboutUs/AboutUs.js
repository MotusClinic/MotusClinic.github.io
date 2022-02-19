import React, { useEffect } from 'react';
import classes from './AboutUs.module.css';
import ImageHeader from './ImageHeader/ImageHeader.js'
import AboutSection from './AboutSection/AboutSection.js'
import { useSpring, animated } from 'react-spring';

const AboutUs = () => {
    
        return (
    
        <div className={classes.aboutUs}>
            <div>
                <ImageHeader />

                <AboutSection />
            </div>
        </div>
    )
}

export default AboutUs
