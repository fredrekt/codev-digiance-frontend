import React, { useContext, useState, useEffect } from 'react'

export const Context = React.createContext({})
export const useStore = () => useContext(Context);

const Store = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <Context.Provider value={{
            isLoggedIn, setIsLoggedIn
        }}>
        </Context.Provider>
    )
}

export default Store
