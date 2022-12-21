import React from 'react'
import "../styles/Home.css"
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import LeftSideBar from '../components/LeftSideBar'
import MainBody from '../components/MainBody'
import RightSideBar from '../components/RightSideBar'
import Footer from '../components/Footer'
import theme from '../theme'
export default function Home() {
    return (
        <div className='home_container'>
            <Navbar />
            <Banner />
            <div className='home_main_container' style={{ 'backgroundColor': theme.main }}>
                <LeftSideBar />
                <MainBody />
                <RightSideBar />
            </div>
            <Footer />
        </div>
    )
}
