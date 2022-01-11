import React, { useContext, useState, useEffect } from 'react'

export const Context = React.createContext({})
export const useStore = () => useContext(Context);

const Store = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState({})

    useEffect(() => {
        console.log('page mounted')
    }, [])

    const logout = () => {
        setIsLoggedIn(false);
    }

    return (
        <Context.Provider value={{
            isLoggedIn, setIsLoggedIn,
            user, setUser,
            logout
        }}>{children}
        </Context.Provider>
    )
}

export default Store
