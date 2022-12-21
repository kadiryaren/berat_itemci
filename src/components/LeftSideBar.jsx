import React from 'react'
import '../styles/MainSection.css'
import { Dropdown } from 'flowbite-react/lib/cjs/components/Dropdown'

export default function LeftSideBar() {
    return (
        <div className='leftsidebar_container'>
            <div className='leftsidebar_main'>
                <h1 className='fs-2'>Servers</h1>
                <Dropdown
                    color="dark"
                    size="lg"
                    label="SERVER 1"
                    dismissOnClick={false}
                >
                    <Dropdown.Item>
                        Metin2 Pvp Item Yang
                    </Dropdown.Item>
                    <Dropdown.Item>
                        PVP Karakter
                    </Dropdown.Item>
                </Dropdown>
                <Dropdown
                    color="dark"
                    size="lg"
                    label="SERVER 2"
                    dismissOnClick={false}
                >
                    <Dropdown.Item>
                        Metin2 Pvp Item Yang
                    </Dropdown.Item>
                    <Dropdown.Item>
                        PVP Karakter
                    </Dropdown.Item>
                </Dropdown>
                <Dropdown
                    color="dark"
                    size="lg"
                    label="SERVER 3"
                    dismissOnClick={false}
                >
                    <Dropdown.Item>
                        Metin2 Pvp Item Yang
                    </Dropdown.Item>
                    <Dropdown.Item>
                        PVP Karakter
                    </Dropdown.Item>
                </Dropdown>
            </div>

        </div>
    )
}
