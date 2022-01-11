import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Container from '../components/Container'

const ChangePassword = () => {
    const [passwords, setPasswords] = useState({
        password: "",
        confirmpassword: ""
    });
    const [error, setError] = useState(false);
    const [confirmed, setConfirmed] = useState(false);

    const {
        password,
        confirmpassword
    } = passwords

    const onChange = e => setPasswords({ ...passwords, [e.target.name]: e.target.value });
    const onSubmit = e => {
        e.preventDefault();
        if(password === confirmpassword){
            alert('Password Confirmed')
            setConfirmed(true);
        }
        else{
            alert(`Password doesn't match!`);
            setError(true);
            setTimeout(()=>{
                setPasswords({
                    password: "",
                    confirmpassword: ""
                })
                setError(false);
                setConfirmed(false);
            }, 1500)
        }
    }

    return (
        <Container>
            <div className="text-left p-2">
                <Link to="/">Go Back</Link>
            </div>
            <div className="flex-col">
                <form onSubmit={e=>onSubmit(e)}>
                    <input name="password" value={password} onChange={e=>onChange(e)} type="password" required className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 my-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Password" />
                    <input name="confirmpassword" value={confirmpassword} onChange={e=>onChange(e)} type="password" required className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 my-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Confirm Password" />
                    
                    {error ? <p className="text-xs font-bold text-red-500">
                        Password doesn't match!
                    </p> :
                    <p className={`text-xs font-bold ${confirmed && "text-green-600"}`}>
                        {confirmed ? `Password matched!` : `You need to confirm your password.`}
                    </p>
                    }
                    <button type="submit" className="mt-2 py-2 px-4  bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2">Change Password</button>
                </form>
            </div>
        </Container>
    )
}

export default ChangePassword
