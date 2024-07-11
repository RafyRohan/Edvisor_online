import React from 'react'
import LoginNavbar from '../components/navbar/loginNavbar'
import LoginedHero from '../components/LoginedHero/LoginedHero'
import Footer from '../components/footer/footer'
import LoginedFooter from '../components/footer/loginedFooter'
import LoginedNavbar from '../components/navbar/loginedNavbar'

function Logined() {
    return (
        <div>
            <LoginedNavbar />

            <LoginedHero />
            <LoginedFooter />
        </div>
    )
}

export default Logined
