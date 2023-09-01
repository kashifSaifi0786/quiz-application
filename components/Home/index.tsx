'use client';
import React, { useState } from 'react';
import Nav from "../common/Nav";
import { setCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
const Home = () => {
    const router = useRouter();
    const [email, setEmail] = useState('')
    const [error, setError] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const handleSubmit = () => {
        //validation
        let error = validate(email);
        if (error) return setError(error);
        //submitting
        setError('');
        setCookie('email', email);
        router.push('/quiz')
    }

    const validate = (value: string): string | undefined => {
        if (!value.includes('@gmail.com')) {
            return 'Email is not valid'
        }
    }

    return <div className="">
        <Nav />

        <div className="h-[calc(100vh-88px)] flex items-center justify-center ">
            <div className="flex flex-col gap-6">
                <input
                    type="text"
                    placeholder="mohdkashif1008@gmail.com"
                    value={email}
                    onChange={handleChange}
                    className="border text-purple-700 border-gray-500 px-2 py-1 rounded-md focus:border-purple-700 focus:ring-purple-700 outline-none"
                />
                {
                    error && <p className='text-red-700'>{error}</p>
                }
                <button onClick={handleSubmit} className="bg-purple-700 text-white px-4 py-1 rounded-full">
                    Save
                </button>
            </div>
        </div>
    </div>
}

export default Home;