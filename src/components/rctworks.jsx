import '../assets/styles/recprj.css'
import icsSched from '../assets/images/ICSSCHED.png'
import baranggay from '../assets/images/Baranggaymanagement.png'
import { Link } from 'react-router-dom'

export default function RecentWorks() {
    return (
        <section className="project" id="prj">
            <div className="prj-tittle">
                <h1>Recent Works</h1>
                <button >
                    <Link className='view-all' to="/works"><i className="fa-solid fa-arrow-up-right-from-square"></i> View all</Link>
                </button>
            </div>

            <div className="prj-imgs">
                <div className="proj1" data-aos="fade-up">
                    <div className="img">
                        <a href="https://github.com/Johnravee/ICS_SCHEDULING_SYSTEM" target='_blank'>
                            <img src={icsSched} alt="ICS SCHEDULING SYSTEM" /> 
                        </a>
                    </div>
                    
                    <div className="seperator1"></div>

                    <div className="prjdescription">
                        <h1>INSTITUTE OF COMPUTER STUDIES SCHEDULING SYSTEM</h1>
                        <p>The ICS Scheduling System is a comprehensive platform designed to modernize and optimize the scheduling process for
                            students, instructors, and administrative staff at Colegio de Montalban's Institute of Computer Studies.</p>

                        <div className="contribution">
                            <p>Contribution: Project leader and full-stack developer</p>
                        </div>

                        <div className="technology">
                            <p>Visual Basic</p>
                            <p>MySQL</p>
                        </div>

                       

                        <p><a href="https://github.com/Johnravee/ICS_SCHEDULING_SYSTEM" className="hub" target='_blank'><i className="fa-brands fa-github github-link"></i></a></p>
                    </div>
                </div>

                <div className="proj2" data-aos="fade-down">
                    <div className="img">
                        <a href="https://github.com/Johnravee/BARANGGAY_INFORMATION_MANAGEMENT" target='_blank'>
                            <img src={baranggay} alt="Baranggaymanagement" />
                        </a>
                    </div>
                
                    <div className="seperator2"></div>
                
                    <div className="prjdescription">
                        <h1>BARANGAY SAN ISIDRO REQUIREMENT REQUEST SYTEM</h1>
                        <p>Barangay San Isidro Requirement Request System to make the process of getting documents or services from the
                            barangay office easier.</p>


                        <div className="contribution">
                            <p>Contribution: Back-end developer</p>
                        </div>


                        <div className="technology">
                            <p>Node.js</p>
                            <p>MySQL</p>
                            <p>Express.js</p>
                        </div>
                
                       
                          <p><a href="https://github.com/Johnravee/BARANGGAY_INFORMATION_MANAGEMENT" className="hub" target='_blank'><i className="fa-brands fa-github"></i></a></p>
                        
             
                    </div>
                </div>
            </div>
        </section>
    )
}
