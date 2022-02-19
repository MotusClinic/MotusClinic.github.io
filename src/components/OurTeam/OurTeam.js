import React from 'react'
import classes from './OurTeam.module.css'
import Profile from '../Profile/Profile.js'
import paoloProfileImage from '../../images/paoloProfileImage.png'
import helenProfileImage from '../../images/helenProfileImage.png'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';
import TeamHeader from './TeamHeader/TeamHeader'

function OurTeam() {

    useEffect(() => {
        Aos.init({duration: 1000})
    });

    return (
        <div className={classes.ourTeam}>

            <TeamHeader />

            <div className={classes.profiles}>

            <div className={classes.profile}>
                <Profile name="Helen Vasserman" 
                title="BSc. CAT(C), I.O.(Q)" 
                education="Helen graduated from the Exercise Science, specialization in Athletic Therapy, program at Concordia in 2017. This year, she is completing her fourth year of 6 at the Centre Ostéopathique du Québec to obtain her diploma of osteopathic studies (D.O)."
                
                experience="She is also currently doing research with Patinage Québec and l’Institut Nationale du Sport where she continues to better her knowledge of biomechanics.
                Her background as a competitive figure skater and current coach, in addition to her experience as a field therapist for rugby, football, gymnastics and soccer allow her to better understand the athlete and their injury needs.  
                
                She has had the opportunity to work with different types of people coming from different backgrounds. From sport injuries to back pain from working at the office, she has been able to use her experience to help people continue with their daily activities."
                
                interests="Helen loves to solve puzzles, read, workout and bake. She is also a true Potterhead and would love to discuss anything Harry Potter related."
                quote="“As a past competitive athlete, I trusted and depended on my therapy team to allow me to focus on my goals pain free. My mission is to help others do the same.”" 
                imageSrc={helenProfileImage}/>
            </div>

            <div className={classes.profile}>
                <Profile 
                name="Paolo Gaudio" 
                title="BSc. CAT(C), SFR, I.O.(Q)"
                quote="“There is nothing more fulfilling than seeing my patient do what they want to do.”"
                education="Paolo graduated from the Exercise Science, specialization in Athletic Therapy, program at Concordia in 2015 and since then has been working both in clinic and on the field. He is currently completing his final year of 6 in order to obtain his diploma of osteopathic studies at the Centre Ostéopathique du Québec (D.O.)"
                
                experience="He is currently affiliated with football, soccer, hockey, judo and basketball teams, which include both varsity and recreational athletes. 
                
                Specializing in the osteopathic approach, his patients come from various backgrounds, from construction workers to the elderly. He truly believes that osteopathy is for everybody."

                interests="He loves to workout, play golf, and is a fan of all things related to sport. He is also an avid home cook who sometimes gives away his secret recipes."
                
                imageSrc={paoloProfileImage}/>
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

export default OurTeam
