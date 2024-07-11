import React from 'react';
import './loginedNavbarStyle.css';
import logo from "../assets/logo.png";

function LoginedNavbar() {
    return (


        <nav className="navbar navbar-expand-lg py-2 fixed-top shadow-sm">
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
                        className="navbar-nav mx-auto mb-2 mb-lg-0 "
                        style={{ marginLeft: "auto", marginRight: "auto" }}
                    >
                        <li className="nav-item font">
                            <a className="nav-link active" aria-current="page" href="#">

                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active px-4" aria-current="page" href="#">

                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">

                            </a>
                        </li>
                    </ul>
                    <div className="d-flex" >
                        <div></div>
                        <p className="lead  me-5 mt-3 loginNavText bold" style={{ fontFamily: "Italic,sans-serif", fontWeight: "700", color: "#8D1010" }} ><span style={{ fontWeight: "400" }} >Welcome Back,</span> Ahmad</p>
                    </div>
                </div>
            </div>
        </nav>

    );
}

export default LoginedNavbar;
