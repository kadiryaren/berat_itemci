import React from 'react'
import '../styles/Banner.css'
import theme from '../theme'
export default function Banner() {
    return (
        <div className='banner_container' style={{ 'backgroundColor': theme.banners }}>
            <img src="https://www.epinsultan.com/img/kategori/metin2-pvp-serverler.jpg" alt="banner" />
            <img src="https://www.epinsultan.com/img/kategori/metin2-pvp-serverler.jpg" alt="banner" />
            <img src="https://www.epinsultan.com/img/kategori/metin2-pvp-serverler.jpg" alt="banner" />
            <img src="https://www.epinsultan.com/img/kategori/metin2-pvp-serverler.jpg" alt="banner" />
        </div>
    )
}
