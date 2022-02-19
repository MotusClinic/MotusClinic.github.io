import React from 'react'
import classes from './Profile.module.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Profile = (props) => {

    return (
        <div data-aos='slide-up' 
        className={classes.profile}>
            
            <div className={classes.imageContainer}>

                <img className={classes.image} src={props.imageSrc} alt="" />

            </div>

            <div>

                <h2 className={classes.name}>{props.name} - {props.title}</h2>
                <p className={classes.paragraph}>
                    <div className={classes.quote}>
                        {props.quote}
                        </div>
                    <br />
                    <div className={classes.section}>
                        <div className={classes.header}> Education </div>
                        {props.education}
                    </div>
                    <div className={classes.section}>
                        <div className={classes.header}> Experience </div>
                        {props.experience}
                    </div>
                    <div className={classes.section}>
                        <div className={classes.header}> Interests </div>
                        {props.interests}
                    </div>
                </p>

            </div>
        </div>
    )
}

export default Profile
