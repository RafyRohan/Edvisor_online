import React from 'react'
import DashboardNavbar from '../components/navbar/dashboardNavbar'
import LoginedFooter from '../components/footer/loginedFooter'
import LoginedHero from '../components/LoginedHero/LoginedHero'
import DashboardHero from '../components/DashboardHero/dashboardHero'
import LoginNavbar from '../components/navbar/loginNavbar'
import LoginedNavbar from '../components/navbar/loginedNavbar'

function Dashboard() {
    return (
        <div>
            <LoginedNavbar />
            <DashboardHero />
            <LoginedFooter />
        </div>
    )
}

export default Dashboard
