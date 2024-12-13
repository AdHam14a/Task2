import vectorImg from "../../assets/Images/landing-page/sec-5/Vector.png"
import Audi from "../../assets/Images/landing-page/sec-5/Audi1.png"
import user from "../../assets/Images/landing-page/sec-5/user.png"
import message from "../../assets/Images/landing-page/sec-5/message.png"
import chat from "../../assets/Images/landing-page/sec-5/chat.png"
import styles from "./WhyChooseUs.module.css"

export default function WhyChooseUs() {
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
                        <button className={`btn btn-outline-primary mt-4`}>WHY CHOOSE US?</button>
                    </div>
                    <p className={`${styles.text}`}></p>
                    <div>
                        <div className={styles.textImgCont}>
                            <img src={user} alt="user" className="me-3"/>
                            <div className="textCont">
                                <h6>Best price guaranteed</h6>
                                <p>Find a lower price? We’ll refund you 100% of the difference.</p>
                            </div>
                        </div>
                        <div className={styles.textImgCont}>
                            <img src={user} alt="user" className="me-3"/>
                            <div className="textCont">
                                <h6>24 hour car delivery</h6>
                                <p>Book your car anytime and we will deliver it directly to you.</p>
                            </div>
                        </div>
                        <div className={styles.textImgCont}>
                            <img src={message} alt="message" className="me-3"/>
                            <div className="textCont">
                                <h6>Best price guaranteed</h6>
                                <p>Find a lower price? We’ll refund you 100% of the difference.</p>
                            </div>
                        </div>
                        <div className={styles.textImgCont}>
                            <img src={chat} alt="user" className="me-3"/>
                            <div className="textCont">
                                <h6>24/7 technical support</h6>
                                <p>Have a question? Contact Rentcars support any time when you have problem.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </>
  )
}
