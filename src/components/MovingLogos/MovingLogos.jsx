import jaguar from "../../assets/Images/landing-page/jaguar.png"
import audi from "../../assets/Images/landing-page/audi.png"
import nissan from "../../assets/Images/landing-page/nissan.png"
import volvo from "../../assets/Images/landing-page/volvo.png"
import ac from "../../assets/Images/landing-page/ac.png"
import styles from "./MovingLogos.module.css"

export default function MovingLogos() {
  return (
      <>
        <div className={styles.scroller}>
          <div className={`d-flex justify-content-between my-5 `}>
              <img src={ jaguar } />
              <img src={ audi } />
              <img src={ nissan } />
              <img src={ volvo } />
              <img src={ ac } />
          </div>
        </div>
    </>
  )
}
