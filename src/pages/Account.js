import axios from 'axios';
import React from 'react'
import Container from '../components/Container';
import Profile from '../components/Profile';
import { useStore } from '../context'

const AccountPage = () => {
    // const [user, setUser] = useState({
    //     email: "fred@gmail.com"
    // })
    const { 
        logout, user
    } = useStore();

    return (
        <Container>
            <h1 className="text-center p-2">Account Page</h1>
            <Profile user={user}/>
            <button className="py-2 px-4 flex justify-center items-center  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2" onClick={logout}>Logout</button>
        </Container>
    )
}

export default AccountPage
