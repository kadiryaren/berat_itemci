import React from 'react'
import '../styles/Navbar.css'
import { Link } from 'react-router-dom'
import theme from '../theme'
export default function Navbar() {
    return (
        <div className='navbar_container' style={{ 'backgroundColor': theme.navbar }}>
            <h2 className='fs-2 text-light'>Itemci</h2>
            <div className='navbar_items'>
                <Link to="/about" className='btn btn-dark' > About Us </Link>
                <Link to="/contact" className='btn btn-dark' > Contact </Link>
            </div>
        </div >
    )
}
