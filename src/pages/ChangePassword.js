import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Container from '../components/Container'
import { useStore } from '../context';
import { useNavigate } from 'react-router-dom';

const ChangePassword = ({history}) => {
    const [passwords, setPasswords] = useState({
        password: "",
        confirmpassword: ""
    });
    const [error, setError] = useState(false);
    const [confirmed, setConfirmed] = useState(false);
    let navigate = useNavigate();

    const { user } = useStore()

    const {
        password,
        confirmpassword
    } = passwords

    const errorChangePassword = () => {
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

    const onChange = e => setPasswords({ ...passwords, [e.target.name]: e.target.value });
    const onSubmit = async(e) => {
        const { email } = user
        try {
            e.preventDefault();
            if(password === confirmpassword){
                setConfirmed(true);
                const res = await axios.patch(`${process.env.REACT_APP_API}/users/change-password`, 
                    {
                        email,
                        password
                    },
                    {
                        headers: {
                            'Content-Type': 'application/json',
                        }
                    }
                )
                if(res){
                    alert('Password successfully changed!')
                    navigate('/')
                }
                else{
                    errorChangePassword();
                }
            }
            else{
                errorChangePassword();
            }
        } 
        catch (error) {
            console.log(error)
            errorChangePassword();
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
