import React from 'react'
import classes from './ImageHeader.module.css'


const ImageHeader = () => {

    return ( 
        <div className={classes.container}>
            <div className={classes.imageSection}>
                <div className={classes.content}>
                    <h1 className={classes.slogan}>Get treated so that you can <br/> get back to enjoying life.</h1>
                    <button className={classes.bookNow}>Book Now</button>
                </div>
            </div>
        </div>
    )
}

export default ImageHeader
