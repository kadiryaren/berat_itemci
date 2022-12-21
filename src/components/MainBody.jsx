import React from 'react'
import '../styles/MainSection.css'
import Post from './Post'
export default function MainBody() {
    return (
        <div className='mainbody_container'>
            <div className='mainbody_header'>
                <h1 className='fs-1'>
                    ITEMCIYE HOSGELDINIZ
                </h1>
            </div>
            <div className='mainbody_banner'>
                <h1 className='fs-1'>
                    <img src="https://cdn.klasgame.com/uploads/metin2-yang-won.png" alt="banner" />

                </h1>
            </div>
            <div className='mainbody_lastaddedposts'>
                <h2 className='fs-2 text-dark'>Son Eklenen Ilanlar</h2>
            </div>
            <div className='mainbody_main'>
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </div>

        </div>
    )
}
