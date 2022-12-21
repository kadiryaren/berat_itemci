import React from 'react'
import '../styles/post.css'
export default function Post() {
    const category = 'Metin2'
    return (
        <div className='post_container'>
            <div className='post_image'>
                <img src="https://images.bynogame.com/images/games/metinikiduz.jpg" alt="post" />
            </div>
            <div className='post_content'>
                <a href="#"><b><i>1000 EP ANİNDA TESLİM +550 İSLEM</i></b></a>
                <div><b>Kategori:</b> {category}</div>
                <div><b>Tarih:</b> 21.12.2022</div>
                <div><b>Fiyat:</b> 200,00 TL</div>
            </div>


        </div>
    )
}
