import styles from "../Landing/Landing.module.css"
import car from "../../assets/Images/landing-page/mainCar.png"
import frame  from "../../assets/Images/landing-page/Frame.png"
    
export default function Landing() {
  return (
    <>
        <div className={styles.cont}>
            <div className={styles.divtext}>
                <h1 className="fw-bold">Find, book and <br/>rent a car <span className="text-primary">Easily</span></h1>
                <p>Get a car wherever and whenever you need it<br/> with your IOS and Android device.</p>
            </div>
            <div className={styles.porshecar}>
                <img src={frame} alt="frame" className={ styles.frame } />
                <img src={car} alt="car" className={ styles.car } />
            </div>
        </div>
        
    </>
  )
}
