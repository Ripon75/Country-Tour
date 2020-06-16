import React from 'react';
import './Home.scss'
import profile from './image/Ripon_Ahmed.jpg'

const About = () => {
    return (
        <div>
            <img className="profile-image" src={profile}/>
            <p className="paragrap">My name is Ripon Ahmed. I am a new web developer. I completed the study an Electronic and Communication Engineering(ECE) from Hajje Mohammad Danesh Science and Technology University(HSTU), Dinajpur.</p>  
        </div>
    );
};

export default About;