import React from "react";
import "./navbarStyle.css";
import logo from "../assets/logo.png";

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg py-4 fixed-top shadow-sm">
                <div className="container-fluid">
                    <a className="navbar-brand px-3" href="#">
                        <img src={logo} alt="Logo" style={{ height: "40px" }} />
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul
                            className="navbar-nav mx-auto mb-2 mb-lg-0"
                            style={{ marginLeft: "auto", marginRight: "auto" }}
                        >
                            <li className="nav-item font">
                                <a className="nav-link active" aria-current="page" href="#">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active px-4" aria-current="page" href="#">
                                    Edvisors
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">
                                    Blog
                                </a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <button className="btn btn-outline-success custom-button" type="submit">
                                Login
                            </button>
                            <button className="btn btn-outline-success custom-button" type="submit">
                                Signup
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
