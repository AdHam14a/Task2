import man from "../../assets/Images/landing-page/sec-6/man.png"
import girl from "../../assets/Images/landing-page/sec-6/girl.png"
import quotes from "../../assets/Images/landing-page/sec-6/quotes.png"

import styles from "./Testimonials.module.css"

export default function Testimonials() {
  return (
    <>
        <div className={styles.mainLayout}>
            <img src={quotes} alt="quotes" className={styles.quotes} />
            <div className={`${styles.layout}`}>
                <button className={`btn btn-outline-primary mt-4`}>Testimonials</button>
            </div>
            <div className={`${styles.heading}`}>
                <h2>What people say about us?</h2>
            </div>
            <div className="container mt-5">
                <div className={`row justify-content-around ${styles.cardStyle}`}>
                    <div className="col-4">
                        <div className="card">
                            <img className={`card-img-top ${styles.imageStyle}`} src={man} alt="man"/>
                            <div className="card-body">
                                <h5 className="card-title"><span className="display-5 fw-bold">5.5</span> Stars
                                    <i className="fa-solid fa-star ms-3 text-warning" />
                                    <i className="fa-solid fa-star text-warning" />
                                    <i className="fa-solid fa-star text-warning" />
                                    <i className="fa-solid fa-star text-warning" />
                                    <i className="fa-solid fa-star text-warning" />
                                </h5>
                                <p className="card-text">“I feel very secure when using caretalls services. Your customer care team is very enthusiastic and the driver is always on time.”</p>
                                <p className="card-text">Charlie Johnson</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                    <div className="card">
                        <img className={`card-img-top ${styles.imageStyle}`} src={girl} alt="girl"/>
                        <div className="card-body">
                            <h5 className="card-title"><span className="display-5 fw-bold">5.5</span> Stars
                                <i className="fa-solid fa-star ms-3 text-warning" />
                                <i className="fa-solid fa-star text-warning" />
                                <i className="fa-solid fa-star text-warning" />
                                <i className="fa-solid fa-star text-warning" />
                                <i className="fa-solid fa-star text-warning" />
                            </h5>
                            <p className="card-text">“I feel very secure when using caretalls services. Your customer care team is very enthusiastic and the driver is always on time.”</p>
                            <p className="card-text">Charlie Johnson</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
