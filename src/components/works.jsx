import work1 from '../assets/images/work1.png'
import work2 from '../assets/images/work2.png'
import work3 from '../assets/images/work3.png'
import work4 from '../assets/images/work4.png'
import '../assets/styles/wrks.css'
export default function Works() {
  return (
    <section className="Content">
      <h1>Works</h1>
      <div className="container" data-aos="fade-up">

        <div className="imgs">
          <div className="name">Capstone Title Generator</div>
          <a href="https://github.com/Johnravee/CapstoneTittleGen" target='_blank'>
            <img src={work1} alt="Capstone Title Generator" />
          </a>
          <div className="number">01</div>
        </div>

        <div className="imgs">
          <div className="name">ICS SCHEDULING VIEWING</div>
          <a href="https://github.com/Johnravee/ICS_SCHED_VIEWING_SUBSYSTEM" target='_blank'>
            <img src={work2} alt="ICS SCHEDULING VIEWING" />
          </a>
          <div className="number">02</div>
        </div>


        <div className="imgs">
          <div className="name">INVENTORY SYSTEM</div>
          <a href="https://github.com/Johnravee/Inventory-sys" target='_blank'>
            <img src={work3} alt="INVENTORY SYSTEM" />
          </a>
          <div className="number">03</div>
        </div>

        <div className="imgs">
          <div className="name">Dental Clinic Appointment</div>
          <a href="https://github.com/Johnravee/DentalClinicAppointmentSystem" target='_blank'>
            <img src={work4} alt="Dental Clinic Appointment System" />
          </a>
          <div className="number">04</div>
        </div>

      </div>
    </section>
  )
}
