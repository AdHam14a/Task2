import img1 from "../../assets/Images/card/car1.png"
import img2 from "../../assets/Images/card/car2.png"
import img3 from "../../assets/Images/card/car3.png"
import star from "../../assets/Images/card/star.png"
import passenger from "../../assets/Images/card/user.png"
import auto from "../../assets/Images/card/Frame.png"
import cold from "../../assets/Images/card/d8wxke_2_.png"
import door from "../../assets/Images/card//doors.png"
import styles from "./CarPage.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"


export default function CarPage() {
    let imagesArr = [img1, img2, img3];
    let [cars, setCars] = useState([]);
    let getData = async () => {
        let fetchedData = await axios.get("https://myfakeapi.com/api/cars/");
        setCars(fetchedData?.data?.cars);
    }
    useEffect(() => {
        getData();
    });
  return (
      <>
        <div className={styles.layout}>
          <button className={`btn btn-outline-primary mt-4`}>POPULAR RENTAL DEALS</button>
        </div>
        <div className={`${styles.heading}`}>
            <h2>Most popular cars rental deals</h2>
        </div>
        <div className="container">
            <div className="row">
            {cars.map((car, index) => {
                const imgIndex = index % imagesArr.length;
                return (
                <>
                    {index < 12 && 
                    <>
                        <div className="col-lg-3 col-md-4 col-sm-6 d-flex align-items-stretch">
                            <div className={`card my-3 ${styles.cardStyles}`}>
                                <img className={`card-img-top m-3 ${styles.cardImg}`} src={imagesArr[imgIndex]} alt="Card image cap"/>
                                <div className="card-body" key={index}>
                                    <h5 className="card-title">{car.car}</h5>
                                    <p className="d-flex align-items-center"><img src={star} /><span className="mx-1">4.8</span> <span className="text-muted">(2.436 reviews)</span></p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="d-flex align-align-items-start "><img src={passenger} /><span className="text-muted">4 passengers</span></div>
                                        <div className="d-flex align-items-center"><img src={ auto } /><span className="text-muted">Auto</span></div>
                                    </div>    
                                    <div className="d-flex justify-content-between align-items-center my-2">
                                        <div className="d-flex align-align-items-start me-4"><img src={cold} /><span className="text-muted">Air Conditioning</span></div>
                                        <div className="d-flex align-items-center"><img src={ door } /><span className="text-muted">4 doors</span></div>
                                    </div>    
                                    <hr />
                                    <div className="d-flex justify-content-between">
                                        <div className="text-muted">Price</div>
                                        <div className="fw-bold">{car.price}<span className="text-muted">/day</span></div>
                                    </div>
                                    <Link to="/cars/cardetail" className="btn btn-primary w-100">Rent now <i className=" ms-3 fa-solid fa-arrow-right" /></Link>
                                </div>
                            </div>  
                        </div>
                    </>
                    }
                </>
                )
            })}
            </div>
        </div>
      </>
  )
}
