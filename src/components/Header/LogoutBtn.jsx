import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from "../../store/authSlice"

function LogoutBtn() {

    const dispatch = useDispatch()

    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
        })
    }

    return (
        <button
            className='inline-block px-6 py-2 text-white font-medium bg-red-500 rounded-full transition duration-300 ease-in-out hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50'
            onClick={logoutHandler}
        >
            Logout
        </button>
    )
}

export default LogoutBtn
