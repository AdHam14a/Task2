import logo from "../../assets/Images/footer/logo-footer.png"
import location from "../../assets/Images/footer/location.png"
import phone from "../../assets/Images/footer/call.png"
import sms from "../../assets/Images/footer/sms.png"
import facebook from "../../assets/Images/footer/facebook.png"
import instagram from "../../assets/Images/footer/instagram.png"
import youtube from "../../assets/Images/footer/youtube.png"
import styles from "./Footer.module.css"

export default function Footer() {
  return (
    <div className={`container-fluid ${styles.cont}`}>
      <div className="row text-light">
        <div className="col-12 col-md-2 mt-4 ms-5 me-4">
          <img src={logo} className="mb-3" />
          <div className="d-flex align-items-center mb-3">
            <img src={location} className="me-2" />
            <div>25566 HC 1, Glenallen,<br /> Alaska, 99588, USA</div>
          </div>
          <div className="d-flex align-items-center mb-3">
            <img src={phone} className="me-2" />
            <div>+603 4784 273 12</div>
          </div>
          <div className="d-flex align-items-center mb-3">
            <img src={sms} className="me-2" />
            <div>rentcars@gmail.com</div>
          </div>
        </div>
        <div className="col-6 col-md-2 mt-4">
          <h5>Our Product</h5>
          <p className="ms-2 mt-3">Career</p>
          <p className="ms-2">Car</p>
          <p className="ms-2">Packages</p>
          <p className="ms-2">Features</p>
          <p className="ms-2">Priceline</p>
        </div>
        <div className="col-6 col-md-2 mt-4">
          <h5>Resources</h5>
          <p className="ms-2 mt-3">Download</p>
          <p className="ms-2">Help Center</p>
          <p className="ms-2">Guides</p>
          <p className="ms-2">Partner Network</p>
          <p className="ms-2">Cruises</p>
          <p className="ms-2">Developer</p>
        </div>
        <div className="col-6 col-md-2 mt-4">
          <h5>About Rent Cars</h5>
          <p className="ms-2 mt-3">Why choose us </p>
          <p className="ms-2">Our story</p>
          <p className="ms-2">Investor Relations</p>
          <p className="ms-2">Press Center</p>
          <p className="ms-2">Advertise</p>
        </div>
        <div className="col-6 col-md-2 mt-4">
          <h5>Follow us</h5>
          <img src={facebook} className="me-2 mt-3" />
          <img src={instagram} className="me-2 mt-3" />
          <img src={youtube} className="mt-3" />
        </div>
      </div>
      <hr className="text-light" />
      <h6 className="text-light pb-5 text-center">CopyRight 2023 . RentCars, All rights reserved</h6>
    </div>
  )
}