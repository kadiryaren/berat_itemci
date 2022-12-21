import React from 'react'
import { Card } from 'flowbite-react/lib/cjs/components/Card'
export default function CardComponent() {
    return (
        <div className="max-w-sm">
            <Card imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    AELDRA
                </h5>
                {/* <p className="font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                </p> */}
            </Card>
        </div>
    )
}
