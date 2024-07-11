import React from "react"
import Navbar from "../components/navbar/navbar";
import HeroSection from "../components/herosection/heroSection.jsx";
import PeopleCarousel from "../components/slider/PeopleCarousel.jsx.jsx"


function HomePage() {


    return (
        <>
            <Navbar />
            <HeroSection />
            <PeopleCarousel />
            {/* <Slider /> */}

        </>
    )
}

export default HomePage;