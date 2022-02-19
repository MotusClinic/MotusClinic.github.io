import React from 'react';
import classes from './TeamHeader.module.css';

const TeamHeader = () => {
    return (
        <div>
        <div className={classes.container}>
            <div className={classes.imageSection}>
                <div className={classes.content}>
                    <h1 className={classes.slogan}> Meet our team of <br/> devoted specialists </h1>
                </div>
            </div>
        </div>
        </div>
    )
}

export default TeamHeader
