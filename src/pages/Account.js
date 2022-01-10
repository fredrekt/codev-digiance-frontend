import React from 'react'
import { useStore } from '../context'

const AccountPage = () => {
    const { 
        logout
    } = useStore();
    
    return (
        <div>
            <h1 className="black-text">Account Page</h1>
            <button onClick={logout}>logout</button>
        </div>
    )
}

export default AccountPage
