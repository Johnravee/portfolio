import '../assets/styles/recprj.css';
import icsSched from '../assets/images/ICSSCHED.png';
import inventorySys from '../assets/images/work3.png';
import { Link } from 'react-router-dom';

export default function RecentWorks() {
    return (
        <section className="project" id="prj">
            <div className="prj-tittle">
                <h1>Recent Works</h1>
                <button>
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
                        <p>The ICS Scheduling System is a comprehensive platform designed to modernize and optimize the scheduling process for students, instructors, and administrative staff at Colegio de Montalban's Institute of Computer Studies.</p>

                        <div className="contribution">
                            <p>Contribution: Lead Developer</p>
                        </div>

                        <div className="technology">
                            <p>Visual Basic</p>
                            <p>MySQL</p>
                        </div>

                        <div className="source">
                            <p><a href="https://github.com/Johnravee/ICS_SCHEDULING_SYSTEM" className="hub" target='_blank'><i className="fa-brands fa-github github-link"></i></a></p>
                            <p><a href="https://www.youtube.com/watch?v=Dej6b8WLk_Q" style={{color : '#ff0000'}} className="hub" target='_blank'><i className="bi bi-youtube"></i></a></p>
                        </div>
                    </div>
                </div>

                <div className="proj2" data-aos="fade-down">
                    <div className="img">
                        <a href="https://github.com/Johnravee/Inventory-sys" target='_blank'>
                            <img src={inventorySys} alt="Baranggaymanagement" />
                        </a>
                    </div>
                
                    <div className="seperator2"></div>
                
                    <div className="prjdescription">
                        <h1>INVENTORY MANAGEMENT SYSTEM</h1>
                        <p>Inventory Management System is designed to manage product inventory, customer information, orders, suppliers, and categories within a business. It provides a structured database schema to streamline inventory-related operations.</p>


                        <div className="contribution">
                            <p>Contribution: Lead Developer</p>
                        </div>


                        <div className="technology">
                            <p>React</p>
                            <p>MySQL</p>
                            <p>Node.js</p>
                            <p>JWT</p>
                        </div>
                
                       
                        <div className="source">
                            <p><a href="https://github.com/Johnravee/Inventory-sys" className="hub" target='_blank'><i className="fa-brands fa-github"></i></a></p>
                            <p><a href="https://www.youtube.com/watch?v=CMpk7UCZvzo" style={{color : '#ff0000'}} className="hub" target='_blank'><i className="bi bi-youtube"></i></a></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
