import React from 'react'
import "./dashboardHeroStyle.css"

function DashboardHero() {
    return (
        <div>
            <div className="container mt-5 ">
                <div className="row mt-5">
                    <div className="col-md-8 ">
                        <div className="profile-header  mt-5" style={{ display: "flex" }}>

                            <img
                                src="path_to_image.jpg"
                                alt="Profile"
                                style={{
                                    width: '100px',
                                    height: '100px',
                                    borderRadius: '50%',
                                    objectFit: 'cover',
                                    marginRight: '20px'
                                }}
                            />

                            <div style={{ color: "#8d1010", marginLeft: "10px", }}>
                                <h3 style={{ fontWeight: "700" }}>Ahmed Shah</h3>
                                <p>A-Levels at Beaconhouse Schools</p>
                                <i>Lahore, Pakistan</i>
                            </div>
                        </div>
                        <div className="d-flex flex-wrap">

                            <div className="col-6 col-md-3 mb-3">
                                <button className="btn  btn-block">Profile Information</button>
                            </div>
                            <div className="col-6 col-md-3 mb-3">
                                <button className="btn btn-danger btn-block">Send Applications</button>
                            </div>
                            <div className="col-6 col-md-3 mb-3">
                                <button className="btn btn-danger btn-block">Track Progress</button>
                            </div>
                            <div className="col-6 col-md-3 mb-3">
                                <button className="btn btn-danger btn-block">Find an Adviser</button>
                            </div>
                            <div className="col-6 col-md-3 mb-3">
                                <button className="btn btn-danger btn-block">Find an Internship</button>
                            </div>
                            <div className="col-6 col-md-3 mb-3">
                                <button className="btn btn-danger btn-block">Request Recommendation</button>
                            </div>
                            <div className="col-6 col-md-3 mb-3">
                                <button className="btn btn-danger btn-block">Find Scholarships</button>
                            </div>
                            <div className="col-6 col-md-3 mb-3">
                                <button className="btn btn-danger btn-block">Learn New Skills</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardHero
