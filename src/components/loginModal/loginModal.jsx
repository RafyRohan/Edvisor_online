import "./loginModalStyle.css";
import React, { useState } from 'react';

function LoginModal() {
    const [activeTab, setActiveTab] = useState('students');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div style={{ marginTop: "0%", background: "linear-gradient(to bottom, #ffeaea, #ffffff)" }}>
            <div className="container d-flex justify-content-center align-items-center shadow-none" style={{ height: '90vh' }}>
                <div className="card p-4" style={{ width: '560px', border: '1px solid #8D1010', borderRadius: '20px' }}>
                    <ul className="nav nav-tabs">
                        <li className="nav -item">
                            <button
                                className={`nav-link ${activeTab === 'students' ? 'active' : ''}`}
                                onClick={() => handleTabClick('students')}
                                style={{ fontWeight: 700, color: '#8D1010' }}
                            >
                                For Students
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                className={`nav-link ${activeTab === 'edvisers' ? 'active' : ''}`}
                                onClick={() => handleTabClick('edvisers')}
                                style={{ fontWeight: 700, color: '#8D1010' }}
                            >
                                For Edvisers
                            </button>
                        </li>
                    </ul>
                    <div className="tab-content mt-3">
                        <div className={`tab-pane ${activeTab === 'students' ? 'active' : ''}`}>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label " >Email/Username</label>
                                    <input type="email" className="form-control" id="email" placeholder="abc@xyz.com" style={{ backgroundColor: "#D9D9D9", borderRadius: "20px" }} />
                                </div>
                                <div className="mb-3 mt-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="password" placeholder="Enter Password" style={{ backgroundColor: "#D9D9D9", borderRadius: "20px" }} />
                                </div>
                                <div className="d-flex justify-content-center ">

                                    <button type="submit" className="btn btn-danger" style={{ backgroundColor: "#8D1010", border: "none", borderRadius: "50px", width: "161px", fontWeight: "700" }} >Login</button>

                                    <button type="button" className="btn btn-danger" style={{ backgroundColor: "#8D1010", border: "none", borderRadius: "50px", width: "161px", fontWeight: "700" }}>Signup</button>
                                </div>
                            </form>
                        </div>
                        <div className={`tab-pane ${activeTab === 'edvisers' ? 'active' : ''}`}>
                            <form>
                                {/* Add form fields specific to Edvisers */}
                                <div className="mb-3">
                                    <label htmlFor="emailEdviser" className="form-label">Email/Username </label>
                                    <input type="email" className="form-control" id="emailEdviser" placeholder="abc@xyz.com " style={{ backgroundColor: "#D9D9D9", borderRadius: "20px" }} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="passwordEdviser" className="form-label">Password </label>
                                    <input type="password" className="form-control" id="passwordEdviser" placeholder="Enter Password " style={{ backgroundColor: "#D9D9D9", borderRadius: "20px" }} />
                                </div>
                                <div className="d-flex justify-content-center">
                                    <button type="submit" className="btn btn-danger" style={{ backgroundColor: "#8D1010", border: "none", borderRadius: "50px", width: "161px", fontWeight: "700" }}>Login </button>
                                    <button type="button" className="btn btn-danger" style={{ backgroundColor: "#8D1010", border: "none", borderRadius: "50px", width: "161px", fontWeight: "700" }}>Signup </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default LoginModal;