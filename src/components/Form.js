import React, { useState } from 'react'
import { useStore } from '../context';

const Form = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const {
        setIsLoggedIn
    } = useStore();

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
    const onSubmit = e => {
        e.preventDefault();
        alert(JSON.stringify(formData))
        // authenticate
        if(email === "fred@gmail.com" && password === '123'){
            setIsLoggedIn(true)
        }
        else setIsLoggedIn(false)
    }

    const {
        email,
        password
    } = formData

    return (
        <div className="flex h-screen justify-center items-center">
            <div classname="m-auto">
                <h3 className="black-text text-center font-bold text-6xl sm:text-7xl leading-tight mb-3">Codev</h3>
                <form onSubmit={e=>onSubmit(e)} className="flex-col bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <input name="email" value={email} onChange={e=>onChange(e)} type="email" className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 my-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Email"/>
                        <input name="password" value={password} onChange={e=>onChange(e)} type="text" className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 my-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Password"/>
                    </div>
                    <div className="flex-column items-center justify-between">
                        <button type="submit" className="py-2 px-4 bg-black hover:bg-gray-50 text-white hover:text-black w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md">
                            Sign In
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form
