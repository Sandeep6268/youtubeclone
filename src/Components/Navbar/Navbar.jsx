import React, { use, useContext, useEffect, useState } from 'react'
import './Navbar.css'
import menu_icon from '../../assets/menu.png'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search.png'
import upload_icon from '../../assets/upload.png'
import more_icon from '../../assets/more.png'
import notification_icon from '../../assets/notification.png'
import profle_icon from '../../assets/jack.png'
import { API_KEY, Contexapi } from '../../Contex'
import { Link } from 'react-router-dom'





const Navbar = () => {
  const {setSidebar,sidebar,setQuery} = useContext(Contexapi);
  

  return (
    <nav className='flex'>
      <div className="menu-icon-logo flex">
        <div className="menu-icon" onClick={()=>setSidebar(!sidebar)}>
          <img src={menu_icon} alt="" />
        </div>
        <Link to={'/'} className="logo">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="search-bar flex">
        <div className="inp-field">
          <input type="text" onChange={(e)=>setQuery(e.target.value)} placeholder='Search here...'/>
        </div>
        <Link to={'/searchquery'} className="search-icon">
          <img src={search_icon} alt="" />
        </Link>
      </div>
      <div className="icons-profile flex">
        <div className="upload-icon">
          <img src={upload_icon} alt="" />
        </div>
        <div className="more-icon">
          <img src={more_icon} alt="" />
        </div>
        <div className="notification-icon">
          <img src={notification_icon} alt="" />
        </div>
        <div className="profile-icon">
          <img src={profle_icon} alt="" />
        </div>
      </div>
      
    </nav>
  )
}

export default Navbar