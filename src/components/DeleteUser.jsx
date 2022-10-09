import React, { useState } from 'react'
import './styles/DeleteUser.css'

const DeleteUser = ({deleteUserById, users, setDeleteUser, deleteUser}) => {
  console.log(users?.deleteUserById);


  const handleDelete = ()=>{
    setDeleteUser(true)
  }

    return (
    <div className='delete__user'>
        <i className="delete__x fa-solid fa-xmark" onClick={handleDelete}></i>
        <p className='delete__title'> user has been deleted</p>

        <button className='delete__btn' onClick={handleDelete}>OK</button>
    </div>
  )
}

export default DeleteUser