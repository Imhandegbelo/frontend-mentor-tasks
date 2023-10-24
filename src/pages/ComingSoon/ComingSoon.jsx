import React from 'react'
import illustration from  "../../assets/comingSoon/react_illustration.svg"

export default function ComingSoon() {
    return (
        <div className='w-screen h-screen flex items-center justify-center bg-gray-100'>
            <main className='max-w-sm flex flex-col gap-4 text-center'>
                <h1 className="text-3xl">Coming Soon!</h1>
                <img src={illustration} alt="react" className='w-full' />
                <p className="text-xl">We are currently working on adding more challenges</p>
            </main>
        </div>
    )
}
