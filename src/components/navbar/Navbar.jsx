import { Link } from "react-router-dom";
import logo from "../../assets/logo mdc nuevo.png"
import './navbar.css'

const Navbar = () =>{
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                
                    
                        <Link className="logo-link" to={"/"}>
                            <img className="logo" src={logo} alt="" />
                        </Link>
                        <button className="navbar-toggler nav-button" data-bs-toggle="collapse" data-bs-target="#navbar-menu">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    

                    <div className="collapse navbar-collapse" id="navbar-menu">
                        <ul className="navbar-nav nav-ul">
                        <li className="nav-item nav-li">    
                            <Link to={"/"}>
                                <h3 className="nav-link nav-h3">Home</h3>
                            </Link>
                        </li>
                        <li className="nav-item nav-li">
                            <Link to={"/activities"}>
                                <h3 className="nav-link nav-h3">Actividades</h3>
                            </Link>  
                        </li>
                        <li className="nav-item nav-li">
                            <Link to={"/signup"}>               
                                <h3 className="nav-link nav-h3">Asociarse</h3>
                            </Link>  
                        </li>
                        <li className="nav-item nav-li">
                            <Link to={"/freeclass"}>
                                <h3 className="nav-link nav-h3">Clase libre</h3>
                            </Link>  
                        </li>
                        </ul>
                    </div>
            </div>
        </nav>
    )
}

export default Navbar;