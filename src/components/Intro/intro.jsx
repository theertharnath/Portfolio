import React from 'react'
import './intro.css'
import bg from '../../assets/image.png'
import { Link } from 'react-scroll'
import btnImg from '../../assets/hireme.png'

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="introName">Smith</span><br />Website Designer</span>
                <p className="introPara">I am a skilled and passionate web designer with experience in creating <br />visually appealing and user-friendly websites</p>
                <Link><button className="btn"><img src={btnImg} alt='Hire Me' className="btnImg" />Hire Me</button></Link>
            </div>
            <img src={bg} alt="Profile" className="bg"/>

        </section>
    )
}

export default Intro
