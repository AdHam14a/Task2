import styles from "./HowItWorks.module.css"
import car from "../../assets/Images/landing-page/car-icon.png"
import location from "../../assets/Images/landing-page/location.png"
import calender from "../../assets/Images/landing-page/calender.png"
import MovingLogos from "../MovingLogos/MovingLogos"

export default function HowItWorks() {
  return (
    <>
        <div className={`${styles.layout}`}>
            <button className={`btn btn-outline-primary mt-4`}>HOW IT WORKS!</button>
        </div>
        <div className={`${styles.heading}`}>
            <h2 className="mb-5">Rent with the following 3 steps</h2>
        </div>
        <div className={`d-flex justify-content-around ${styles.mainlayout}`}> 
            <div className="d-flex justify-content-center align-items-center flex-column">
                <img src={location} />
                <h3 className="mt-3">Choose location</h3>
                <p className="text-center">Choose your location and find<br/> your best car</p>
            </div>
            <div className="d-flex justify-content-center align-items-center flex-column">
                <img src={calender} />
                <h3 className="mt-3">Pick-up date</h3>
                <p className="text-center">Select your pick-up date and<br/> time to book your car</p>
            </div>
            <div className="d-flex justify-content-center align-items-center flex-column">
                <img src={car} />
                <h3 className="mt-3">Book your car</h3>
                <p className="text-center">Book your car and we will deliver<br/> it directly to you</p>
            </div>
        </div>
        <MovingLogos />
    </>
  )
}
