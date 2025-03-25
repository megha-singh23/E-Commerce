import React from 'react'
import { Outlet } from 'react-router-dom'

const Services = () => {
    return (
        <div>
            <h1 className="text-3xl">All Services</h1>
            <Outlet />
        </div>
    )
}

export default Services

const AddUser = () => {
    return (
        <h1>Adding user</h1>
    )
};
const UpdateUser = () => {
    return (
        <h1>Updating user</h1>
    )
};
const DeleteUser = () => {
    return (
        <h1>Deleting user</h1>
    )
};

const SeeAllUser = () => {
    return (
        <h1>Seeing all user</h1>
    )
};

export {AddUser,UpdateUser,DeleteUser,SeeAllUser}