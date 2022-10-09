import React from 'react'
import './styles/DeleteUser.css'

const DeleteUser = () => {
    return (
    <div className='delete__user'>
        <i className="delete__x fa-solid fa-xmark"></i>
        <p className='delete__title'>The User has</p>
        <p className='delete__title'>been deleted</p>
        <button className='delete__btn'>Close</button>
    </div>
  )
}

export default DeleteUser