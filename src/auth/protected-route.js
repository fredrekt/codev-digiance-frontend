import React, { useCallback, useEffect } from 'react'
import Form from '../components/Form'
import { useStore } from '../context'
import axios from 'axios'

const ProtectedRoute = ({children}) => {
    const { 
        isLoggedIn, 
        setIsLoggedIn
    } = useStore();

    const FetchData = useCallback(() => {
        if(typeof window !== 'undefined' && localStorage.getItem('token')){
            axios.get('/custom-auth/verify',{
                headers: {
                    Authorization:
                    `Bearer ${localStorage.getItem('token')}`,
                },
            })
            .then(({data}) => {
                setTimeout(() => {
                    setIsLoggedIn(true)
                }, 2000);
            })
            .catch(err => {
                console.log(err)
                // logout()
            })
        }
        else{
            // logout()
        }
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        FetchData()
    }, [FetchData])

    return (
        <>
            {
                isLoggedIn ? children : <Form/>
            }
        </>
    )
}

export default ProtectedRoute
