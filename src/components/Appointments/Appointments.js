import React from 'react'
import classes from './Appointments.module.css';
import AppointmentsHeader from './AppointmentsHeader./AppointmentsHeader';
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';

const Appointments = () => {

    useEffect(() => {
        Aos.init({duration: 1000})
    });

    return (
        <div className={classes.appointments}>
            <AppointmentsHeader />

            <div 
            data-aos='fade-in'
            className={classes.boxes}>

            <div 
            data-aos='slide-up'
            className={classes.box}>
                <div className={classes.appointmentType}>Osteopathy</div>
                <p className={classes.description}>
                Osteopaths are health care professionals who use manual therapy to restore mobility to improve the function of your body systems to then optimize its self-regulation. An osteopathy appointment begins with an assessment where an in-depth history and evaluation are completed in order to find the cause of your health concern. Each treatment is specific to the person and their concern. An osteopath is able to treat a variety of health concerns including, but not limited to, musculoskeletal pain (back, neck, shoulder), headaches, jaw pain, pregnant women and pediatrics. 
                </p>
            </div>

            <div 
            data-aos='slide-up'
            className={classes.box}>
                <div className={classes.appointmentType}>Athletic Therapy</div>
                <p className={classes.description}>
                Certified Athletic Therapists (ATs) are health care professionals who assist in injury treatment, rehabilitation and prevention in the active population both on field and in clinic. Whether you run marathons, swim, bike or simply walk to work, an AT can help you with your health concerns. They specialize in musculoskeletal injuries such as ankle sprains, pulled hamstrings, golfer’s elbow and concussions and treat them with manual therapy and rehabilitation exercises. They are also experts in assisting with pain specific to certain movements, such as squats and deadlifts, and will analyze your technique and provide the corrections or strengthening/functional exercises as needed. 
                </p>
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
        </div>
    )
}

export default Appointments
