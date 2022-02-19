import classes from './AboutSection.module.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';
import { BsFacebook } from "react-icons/bs"
import { BsInstagram } from "react-icons/bs"
import { BsFillPinMapFill } from "react-icons/bs"
import { BsFillTelephoneFill } from "react-icons/bs"

const AboutSection = () => {
    useEffect(() => {
        Aos.init({duration: 1000})
    });

    return (
        <div className={classes.container}>
            <h1 className={classes.heading}>About Us</h1>
            <p data-aos='slide-up' className={classes.paragraph}>
                Welcome to the official Motus website
            </p>

            <div data-aos='slide-up' className={classes.boxes}>
                <div className={classes.headingBox}>Our Mission</div>
                <div className={classes.textBox}>
                Mobility will get you back to feeling like yourself. <br />At Mōtus (latin: mobility), our goal is to give back movement to your body. 
                <br /> 
                <br />
                Our multidisciplinary team is here to assess, plan and treat according to your needs. Trust us to help you today  
                </div>
            </div>

            <div data-aos='slide-up' className={classes.contactBox}>
                <div className={classes.headingBox}>Contact Information</div>

                    <div className={classes.contact}>

                        <span className={classes.icon}>
                        < BsFillTelephoneFill />
                        </span>

                        <span className={classes.contactContent}>
                            (514) - 245 - 9536
                        </span>

                    </div>

                    <div className={classes.contact}>

                        <span className={classes.icon}>
                            < BsFacebook />
                        </span>

                        <span className={classes.contactContent}>
                            MotusOsteo
                        </span>

                    </div>

                    <div className={classes.contact}>

                        <span className={classes.icon}>
                            < BsInstagram />
                        </span>

                        <span className={classes.contactContent}>
                            @MotusOsteo
                        </span>

                    </div>

                    <div className={classes.contact}>

                        <span className={classes.icon}>
                            < BsFillPinMapFill />
                        </span>

                        <span className={classes.contactContent}>
                            5655 Rue Beaulieu, Montréal, QC
                        </span>

                    </div>
                
            </div>

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
    </div>
    )
}

export default AboutSection
