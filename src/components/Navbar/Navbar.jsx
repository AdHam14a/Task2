import icon from "../../assets/Images/nav/logo.png"

export default function Navbar() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light ms-5">
            <a className="navbar-brand" href="#">
                    <img src={ icon } alt="icon"/>        
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse " id="navbarSupportedContent">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item active">
                        <a className="nav-link text-dark" href="#">Become a renter</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-dark" href="#">Renter deals</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-dark" href="#">How it works</a>
                    </li>
                    <li className="nav-item me-5">
                        <a className="nav-link text-dark" href="#">Why choose us</a>
                    </li>
                </ul>
                <button className="btn btn-light me-3">Sign in</button>
                <button className="btn btn-primary me-5">Sign up</button>
            </div>
        </nav>
    </>
  )
}
