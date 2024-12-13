import vectorImg from "../../assets/Images/landing-page/sec-5/Vector.png"
import Audi from "../../assets/Images/landing-page/sec-5/Audi1.png"
import passenger from "../../assets/Images/card/user.png"
import auto from "../../assets/Images/card/Frame.png"
import cold from "../../assets/Images/card/d8wxke_2_.png"
import door from "../../assets/Images/card//doors.png"
import styles from "./SpecificCar.module.css"

export default function SpecificCar() {
  return (
      <>
        <div className={`container ${styles.cont}`}>
            <div className="row">
                <div className={`col-6 ${styles.imgCont}`}>
                    <img src={Audi} alt="audi" className={ styles.audi } />
                    <img src={vectorImg} alt="vector" className={ styles.vector }/>
                </div>
                <div className={`col-6 ${styles.paragraphs}`}>
                    <div className={`${styles.layout}`}>
                        <button className={`btn btn-outline-primary mt-4`}>HOW IT WORKS!</button>
                    </div>
                    <p className={`${styles.text}`}>We offer the best experience with our rental deals</p>
                    <div className={styles.features}>
                        <p><img src={auto} alt="auto" className="me-2"/> Auto</p>
                        <p><img src={passenger} alt="passenger" className="me-2"/>4 Passengers</p>
                        <p><img src={cold} alt="cold" className="me-2"/>Air Conditioning</p>
                        <p><img src={door} alt="door" className="me-2"/>2 Doors</p>
                    </div>
                </div>
            </div>
        </div>
      </>
  )
}
