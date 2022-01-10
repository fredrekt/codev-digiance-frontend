import React from 'react'
import Form from '../components/Form'
import { useStore } from '../context'

const ProtectedRoute = ({children}) => {
    const { 
        isLoggedIn, 
        setIsLoggedIn
    } = useStore()

    return (
        <>
            {
                isLoggedIn ? children : <Form/>
            }
        </>
    )
}

export default ProtectedRoute
