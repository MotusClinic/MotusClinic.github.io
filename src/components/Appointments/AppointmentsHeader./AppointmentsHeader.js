import classes from './AppointmentsHeader.module.css';
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';

const AppointmentsHeader = () => {

    useEffect(() => {
        Aos.init({duration: 1000})
    });

    return (

        <div>
            <div className={classes.container}>
            <div className={classes.imageSection}>
                <div className={classes.content}>
                    <h1 className={classes.slogan}> Find out more about <br/> what kind of appointments we offer </h1>
                    <button className={classes.bookNow}>Book Now</button>
                </div>
            </div>
            </div>
        </div>
    )
}

export default AppointmentsHeader
