import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

function Home() {
    return (
        <div className="home page">
            <h1> Welcome to GOOD EATING</h1>
            <Link className="homeLink" to="/catalog" type="submit"> View GOOD EATING</Link>
        </div>
    );
}

export default Home;
