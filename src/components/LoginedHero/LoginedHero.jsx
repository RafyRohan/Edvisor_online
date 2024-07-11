import React from 'react'
import "./LoginedHeroStyle.css"

function LoginedHero() {
    return (
        <div>
            <div style={{}}>
                <div className="container-fluid" style={{ marginTop: "5%", background: "linear-gradient(to bottom, #ffeaea, #ffffff)" }} >
                    <div className="row">
                        <div className="col-3 " style={{ position: 'fixed', top: '0', left: '0', height: '100%', overflowY: 'auto', paddingTop: '5%', zIndex: 1000 }}>
                            <div className="d-flex flex-column align-items-center py-3" >
                                <button className="btn py-2 m-2 mt-3 sidebar-btn active ">Personal Information</button>
                                <button className="btn py-2 m-2 sidebar-btn">Academic Information</button>
                                <button className="btn py-2 m-2 sidebar-btn">Extracurriculars</button>
                                <button className="btn py-2 m-2 sidebar-btn">Work Experience</button>
                                <button className="btn py-2 m-2 sidebar-btn">Awards/Accolades</button>
                                <button className="btn py-2 m-2 sidebar-btn">Certificates/Skills</button>
                                <button className="btn py-2 m-2 sidebar-btn">Personal Statement</button>
                            </div>
                        </div>
                        <div className="col-9" style={{ borderLeft: "1px solid black", marginLeft: "25%" }}>
                            <form className="p-3">
                                <div className="form-group mt-4 my-2">
                                    <label htmlFor="firstName" className='my-2'>First Name</label>
                                    <input type="text" className="form-control inputSTL active" id="firstName" placeholder="" />
                                </div>
                                <div className="form-group my-4">
                                    <label htmlFor="middleName" className='my-2'>Middle Name</label>
                                    <input type="text" className="form-control inputSTL" id="middleName" placeholder="" style={{ outline: "none" }} />
                                </div>
                                <div className="form-group my-4">
                                    <label htmlFor="lastName" className='my-2'>Surname/Last Name</label>
                                    <input type="text" className="form-control inputSTL" id="lastName" placeholder="" />
                                </div>
                                <div className="form-group my-4">
                                    <label htmlFor="fatherName" className='my-2'>Father Name</label>
                                    <input type="text" className="form-control inputSTL" id="fatherName" placeholder="" />
                                </div>
                                <div className="form-group my-4">
                                    <label htmlFor="dob" className='my-2'>Date of Birth</label>
                                    <div className="d-flex">
                                        <input type="text" className="form-control me-2 inputSTL" id="dobDay" placeholder="DD" />
                                        <input type="" className="form-control me-2 inputSTL" id="dobMonth" placeholder="MM" />
                                        <input type="text" className="form-control inputSTL" id="dobYear" placeholder="YYYY" />
                                    </div>
                                </div>
                                <div className="form-group my-4">
                                    <label htmlFor="gender" className='my-2'>Gender</label>
                                    <input type="text" className="form-control inputSTL" id="gender" placeholder="" />
                                </div>
                                <div className="form-group my-4">
                                    <label htmlFor="nationality" className='my-2'>National Identity Card #/ B-Form #/ NICOP #</label>
                                    <input type="text" className="form-control inputSTL" id="nationality" placeholder="" />
                                </div>
                                <div className="form-group my-4">
                                    <label htmlFor="nationality" className='my-2'>Mobile Number</label>
                                    <input type="text" className="form-control inputSTL" id="nationality" placeholder="" />
                                </div>

                                <div className="d-flex justify-content-start">
                                    <button type="submit" className="btn btn-submit">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginedHero
