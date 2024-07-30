import { Link } from 'react-router-dom'
import '../assets/styles/foot.css'

export default function Footer(){

    const scrollToTop = ()=>{
        window.scrollTo({top: 0, behavior: 'instant'})
    }


    return(
        <footer>
            <div className="line_hr">
                <div className="line"></div>
            </div>

            <div className="f_content">
                <div className="f_tittle">
                    <Link to="/"  id="logo" onClick={scrollToTop}><h1>Johnrave</h1></Link>
                </div>

                <div className="f_link">
                    <a className="foot_link" href="https://www.linkedin.com/in/johrave-mimay-740a06237/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                    <a className="foot_link" href="https://github.com/Johnravee" target = "_blank"><i className="fa-brands fa-github"></i></a>
                    <a href="https://medium.com/@johnravemimayn" target="_blank" ><i className="bi bi-medium"></i></a>
                </div> 
            </div>
        </footer>
    )
}