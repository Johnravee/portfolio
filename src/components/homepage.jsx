import { Link } from 'react-router-dom';
import me from '../assets/images/me.jpg';
import '../assets/styles/home.css'

export default function Homepage() {
  return (
   <>
       <section className="Home">
      <div className="portrait">
        <div className="tempo">
          <img src={me} alt="" /> 
        </div>
      </div>

      <div className="tittle">
        <div className="intro">
          <h2>Hello, they call me <span>Rave</span></h2>
          <h1>I <span id="debug">debug <i className="fa-solid fa-bug"></i></span> and <span id="develop">develop <i className="fa-solid fa-code"></i></span> website things! </h1>
        </div>
      </div>
    </section>

   
   </>
  );
}
