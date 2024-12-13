
import styles from "../MainCars/MainCars.module.css"

import CarDetails from "../CarDetails/CarDetails";
import { Link } from "react-router-dom";

export default function MainCars() {
  return (
    <>
      <nav className={`navbar navbar-light ${styles.searchBar}`}>
        <form className={`form-inline ${styles.formStyle}`}>
            <div className="input-group w-100">
              <div className="input-group-prepend">
                <span className="input-group-text p-3 py-2 w-100" id="basic-addon1"><i className={`fa-solid fa-location-dot ${styles.locIcon}`} /></span>
              </div>
              <input type="text" className="form-control flex-grow-1" placeholder="Search by name" aria-label="search" aria-describedby="basic-addon1"/>
              <button className="btn btn-primary">Search</button>  
          </div>
        </form>
      </nav>
      <div>
        <div className={styles.layout}>
          <button className={`btn btn-outline-primary mt-4`}>POPULAR RENTAL DEALS</button>
        </div>
        <div className={`${styles.heading}`}>
          <h2>Most popular cars rental deals</h2>
        </div>
        <CarDetails/>
        <div className={styles.layout}>
          <Link to="/cars" className={`btn btn-outline-secondary mt-4 px-5 mb-5`}>Show all vehicles <i className=" ms-3 fa-solid fa-arrow-right" /></Link>
        </div>
      </div>
      
    </>
  )
}
