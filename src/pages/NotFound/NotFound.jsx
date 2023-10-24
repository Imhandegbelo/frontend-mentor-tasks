import React from 'react'
import illustration from  "../../assets/notFound/404.svg"
import { Link } from 'react-router-dom'

export default function NotFound() {
    return (
        <div className='w-screen h-screen flex items-center justify-center bg-gray-100'>
            <main className='max-w-sm flex flex-col gap-4 text-center'>
                <h1 className="text-3xl">Coming Soon!</h1>
                <img src={illustration} alt="react" className='w-full' />
                <p className="text-xl">The requested url was not found</p>
                <Link to="/" className="py-3 px-6 bg-blue-500 text-white font-bold rounded-md">Go Back Home</Link>
            </main>
        </div>
    )
}
