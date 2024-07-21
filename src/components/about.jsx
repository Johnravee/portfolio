import '../assets/styles/abt.css'

import mongodb from '../assets/images/mongodb.png'
import mysql from '../assets/images/mysql.png'
import nodejs from '../assets/images/nodejs.png'
import php from '../assets/images/php.png'
import expressjs from '../assets/images/express.png'
import react from '../assets/images/react.png'
import { Link } from 'react-router-dom'

export default function About(){
    return(
        <section className="About" id="abt">
            <h1>About</h1>
                <div className="aboutbody">
                    <div className="part1" data-aos="fade-up">
                        <h1>Social Links</h1>
                        <a href="https://github.com/Johnravee" id="sublink" target='_blank'>➟ Github</a>
                        <a href="https://medium.com/@johnravemimayn" id="sublink" target='_blank'>➟ Medium</a>
                        <a href="https://www.linkedin.com/in/johrave-mimay-740a06237/" id="sublink" target='_blank'>➟ Linkedin</a>
                    </div>

                    <div id="part2" data-aos="fade-up">
                        <div className="paragraph1">
                           I'm a Bachelor of Science in Information Technology student.
                        </div>

                        <div className="paragraph2">
                           I am building a website because I want to improve my skills when it comes to web development and technology stuff.
                        </div>
                        
                        <div className="paragraph3">
                            When I'm not coding, I enjoy reading and learning about things like self-development, health, and minimalism.
                        </div>

                         <div className="stack-wrapper" data-aos="fade-up">
                 
                            <h2 className='txt-stack'>Technology Stack</h2>

                            <div className="img-wrapper">
                          
                                <div className="stack-card">
                                    <img src={mongodb} alt="" className='stack-logo' />
                                </div>

                                <div className="stack-card">
                                    <img src={mysql} alt="" className='stack-logo' />
                                </div>

                                <div className="stack-card">
                                    <img src={nodejs} alt="" className='stack-logo' />
                                </div>

                                <div className="stack-card">
                                    <img src={expressjs} alt="" className='stack-logo' />
                                </div> 

                                <div className="stack-card">
                                    <img src={react} alt="" className='stack-logo' />
                                </div>

                                <div className="stack-card">
                                    <img src={php} alt="" className='stack-logo' />
                                </div>
                            </div>
                        </div>

                         <div className="blogs-wrapper" data-aos="fade-up">
                 
                            <h2 className='blog-txt'>Blogs</h2>

                            <div className="blog-wrapper">          
                                <div className="blog-card">
                                     <h1>Node.js Authentication with JSON Web Token (JWT)</h1>
                                    <a href="https://medium.com/@johnravemimayn/node-js-authentication-with-json-web-token-jwt-253075e70ddd" target="_blank">View blog post <span>➟</span></a>
                                </div>

                                <div className="blog-card">
                                     <h1>Different Types of Websites</h1>
                                    <a href="https://medium.com/@johnravemimayn/different-types-of-websites-79aec63f6c3d" target="_blank">View blog post <span>➟</span></a>
                                </div>
                            </div>
                        </div>
                    </div>       
                </div>  
        </section>
    )
}