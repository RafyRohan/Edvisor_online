import React from "react";
import "./heroSectionStyle.css";

function HeroSection() {
    return (
        <div1>
            <div className="heroSection my-5">
                <div className="px-4 py-5 my-3 text-center">

                    <p className="lead my5 fw-medium   confusedText">Confused about your future goals?</p>
                    <h1
                        className="display-5 fw-bold  my-5 h1Text"

                    >
                        <span >1-on-1</span> Student Counselling
                    </h1>

                    <div className="d-flex align-items-center justify-content-center">
                        <input className="w-50 py-2 px-3  " type="text " placeholder="Search by name or category" />
                        <button className=" m-3 py2 btan  "  >Find Edvisor</button>
                    </div>


                </div>
            </div>
        </div1>
    );
}

export default HeroSection;
