import android from "../../assets/Images/landing-page/android.png"
import ios from "../../assets/Images/landing-page/ios.png"
import car from "../../assets/Images/landing-page/sec-7/iPhone-14.png"
import styles from "./Download.module.css";

export default function Download() {
  return (
      <>
        <div className={styles.mainLayout}>
            <h1>Download Rentcars App for <span className="text-primary">FREE</span></h1>
            <p className="text-muted">For faster, easier booking and exclusive deals.</p>
            <div className="px-5">
                <img src={android} alt="android" className="me-3"/>
                <img src={ios} alt="ios"/>
            </div>
            <form>
                <div className={`form-row`}>
                    <div className="col">
                        <input type="text" className={`form-control rounded-4 mt-3 ${styles.formLayout}`} placeholder="Name"/>
                    </div>
                    <div className="col">
                        <input type="number" className={`form-control rounded-4 mt-3 ${styles.formLayout}`} placeholder="Phone Number"/>
                    </div>
                    <div className="col">
                        <input type="email" className={`form-control rounded-4 mt-3 ${styles.formLayout}`} placeholder="Email"/>
                    </div>
                    <button className={`btn btn-primary mt-3 px-4`}>Submit</button>
                </div>
            </form>
        </div>
        <div className={styles.imgCont}>
            <div className={styles.img}>
                <img src={car} alt="car"/>
            </div>
        </div>
      </>
  )
}
