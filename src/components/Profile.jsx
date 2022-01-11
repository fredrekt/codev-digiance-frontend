import React from 'react'
import { Link } from 'react-router-dom'
import Modal from './Modal'

const Profile = ({user}) => {
    // Using static image for no space consumed in deployment
    const bgImageUrl = "https://images.pexels.com/photos/1473215/pexels-photo-1473215.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    const imageUrl = "https://media-exp1.licdn.com/dms/image/C5103AQGPZH5KYw0Z6g/profile-displayphoto-shrink_800_800/0/1556178466218?e=1647475200&v=beta&t=II1o_weHxogW2hdMR6T-cf-yHHm3XB0I-Hd1S1etOj0"
    return (
        <>
        <div className="shadow-lg w-64 bg-white dark:bg-gray-800">
            <img alt="profil" src={bgImageUrl} className="rounded-t-lg h-28 w-full mb-4"/>
            <div className="flex flex-col items-center justify-center p-4 -mt-16">
                <a href="#" className="block relative">
                    <img alt="profil" src={imageUrl} className="mx-auto object-cover rounded-full h-16 w-16 "/>
                </a>
                <p className="text-gray-800 dark:text-white text-xl font-medium mt-2">
                    {user.email}
                </p>
                <Modal/>
                <div className="flex items-center justify-between gap-4 w-full mt-8">
                    <Link to="/change-password" className="py-2 px-4 bg-black hover:bg-gray-100 text-white hover:text-black w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md rounded-lg ">
                        Change Password
                    </Link>
                </div>
            </div>
        </div>
        </>
    )
}

export default Profile
