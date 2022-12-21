import React from 'react'
import '../styles/MainSection.css'
import { Checkbox } from 'flowbite-react/lib/cjs/components/Checkbox'
import { Button } from 'flowbite-react/lib/cjs/components/Button'
import { TextInput } from 'flowbite-react/lib/cjs/components/TextInput'
import { Label } from 'flowbite-react/lib/cjs/components/Label'

export default function RightSideBar() {
    return (
        <div className='rightsidebar_container'>
            <div className='rightsidebar_main'>
                <h2 className='fs-2 text-dark'>Sign In</h2>

                <form className="flex login-form flex-col gap-4">
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="email1"
                                value="Your email"
                            />
                        </div>
                        <TextInput
                            id="email1"
                            type="email"
                            placeholder="name@flowbite.com"
                            required={true}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="password1"
                                value="Your password"
                            />
                        </div>
                        <TextInput
                            id="password1"
                            type="password"
                            required={true}
                        />
                    </div>
                    <div className="flex items-center gap-2">
                        <Checkbox id="remember" />
                        <Label htmlFor="remember">
                            Remember me
                        </Label>
                    </div>
                    <Button type="submit">
                        Sign In
                    </Button>
                </form>
            </div>

        </div>
    )
}
