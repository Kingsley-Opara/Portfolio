import profile from '../img/profile.jpg'
import './hero.css'
import { Container } from "react-bootstrap";
import Typewriter from "typewriter-effect"
import {AiFillTwitterCircle, AiFillGithub, AiFillLinkedin} from 'react-icons/ai';
import {FaFacebook} from 'react-icons/fa';
import {MdOutlineLightMode} from 'react-icons/md';
import { useContext } from 'react';
import Context from '../../context';
import {FaMoon} from 'react-icons/fa'

const Hero = () => {
    const {lightMode, setLightMode} = useContext(Context)
    const changeTheme = ()=>{
        setLightMode(!lightMode)
        !lightMode && localStorage.setItem('theme', 'dark')
        lightMode && localStorage.setItem('theme', 'light')
    }
    return ( 
        <>
            {/* <img  src="https://user-images.githubusercontent.com/105108549/190127191-945c97b4-f2e8-47fe-b1da-ff678d31c0ed.gif" /> */}
            <Container>
                <div className='con-intro'>
                    <div className="py-5 my-5 intro">
                        <h2 className='name'>Hi am Kingsley &#128075; </h2>
                        <div className="typewriter">
                            <Typewriter
                            onInit={(typewriter) =>{
                                typewriter 
                                .typeString("I'm a Full Stack Developer")
                                .pauseFor(2000)
                                .deleteAll()
                                .typeString("Am an Open Source Advocate")
                                .pauseFor(2000)
                                .deleteAll()
                                .typeString('I Solve Unique Problems With Code')
                                .pauseFor(1000)
                                .deleteAll()
                                .typeString('Am a Technical Writer')
                                .pauseFor(1000)
                                .deleteAll()
                                .typeString("I'm a Full Stack Developer")
                                .start()
                            }}
                            />
                            <ul>
                                <li>Former Trainer at I4GXZuri Internship</li>
                                <li>Student Lead Ambassador for I4G</li>
                                <li>Open Source Advocate</li>
                                <li>Technical Writer</li>
                            </ul>
                            <div className='icons'>
                                <a href="" className='icon'><AiFillTwitterCircle /></a>
                                <a href="" className='icon'><FaFacebook/></a>
                                <a href="" className='icon'><AiFillLinkedin/></a>
                                <a href="" className='icon'><AiFillGithub/></a>
                            </div>
                        </div>
                    </div>
                    <div className = 'profile'>
                        <div className='profile-con'>
                            <img  src={profile} 
                            className='gif'
                            />
                            <img src='https://img.shields.io/badge/python-DD0031?style=for-the-badge&logo=python&logoColor=white' 
                            className='python'
                            />
                            <img src='https://img.shields.io/badge/Django-DD0031?style=for-the-badge&logo=django&logoColor=white'
                            className='django'
                            />
                            <img src='https://img.shields.io/badge/Fastapi-DD0031?style=for-the-badge&logo=fastapi&logoColor=white'
                            className='fastapi'
                            />
                            <img src='https://img.shields.io/badge/Reactjs-DD0031?style=for-the-badge&logo=react&logoColor=white'
                            className='react'
                            />
                            <img src='https://img.shields.io/badge/javascript-DD0031?style=for-the-badge&logo=javascript&logoColor=white'
                            className='javascript'
                            />
                            <img src='https://img.shields.io/badge/tailwind-DD0031?style=for-the-badge&logo=tailwindcss&logoColor=white'
                            className='tailwind'
                            />
                        </div>

                    </div>
                    
                    { !lightMode ? <FaMoon className ='light moon' onClick={()=>{changeTheme()}}/> : 
                    <MdOutlineLightMode className='light' onClick={()=>{changeTheme()}}/>}
                </div>

                
            </Container>
            
        </>
     );
}
 
export default Hero;