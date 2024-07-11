import React from "react";
import "./sliderStyle.css";
import Card from "./Card";


function Slider() {

    const people = [
        {
            name: "Rafy Rohan",
            designation: "Software Engineer",
            image: ""
        },
        {
            name: "Muhammad Ehtisham",
            designation: "Product Owner",
            image: ""
        },
        {
            name: "Muahmmad Subhan",
            designation: "Software Engineer II",
            image: ""
        },
        {
            name: "Muahmmad Subhan",
            designation: "Software Engineer II",
            image: ""
        },



    ]

    return (
        <>
            <div className="text-center">
                <p className="lead mb-4 fw-semibold" >Talk to people who know more, possess experience and guide better!</p>

            </div>
            <div className="d-flex flex-row flex-wrap" >
                {people.map((item) => (
                    <Card name={item.name} designation={item.designation} image={item.image} />
                ))}
            </div>
        </>
    )
}
export default Slider