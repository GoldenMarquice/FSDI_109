import { Link } from "react-router-dom";
import "./navBar.css";

function NavBar() {
    return (
        <div className="navbar">
            <Link to="/home"> Home </Link>
            <Link to="/catalog"> Catalog </Link>
            <Link to="/about"> About </Link>
            <Link to="/contact"> Contact Us </Link>
            <Link to="/admin"> Admin Page </Link>

            <Link className="btn btn-outline-success" to="/cart" type="submit">
                Cart
            </Link>
        </div>
    );
}

export default NavBar;
