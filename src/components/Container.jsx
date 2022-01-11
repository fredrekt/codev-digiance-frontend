import React from 'react'

const Container = ({children}) => {
    return (
        <div className="flex h-screen justify-center items-center">
            <div classname="m-auto">
                {children}
            </div>
        </div>
    )
}

export default Container
