import React from 'react'
import './index.css';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import logo from '../../assets/logo/long-logo.png';
import LanguageIcon from "@mui/icons-material/Language";
import BasicMenu from './Profile';

function Header() {
  return (
    <div className='Navbar'>
      <img src={logo} alt="logo"  className='Navbar-logo'/>
      <div className="search-bar">
        <div className="searchbartext">Any Where</div>
        <div className="searchbartext">Any Week</div>
        <div className="searchbartext2">Add guests</div>
        <div className="searchicon-div"><SearchRoundedIcon className='search-icon' /></div>    
      </div>
      <div className="profile-container">
        <div className="airbnb-your-home">Airbnb your home</div>
        <div className="airbnb-your-home">
          <LanguageIcon sx={{ fontSize: "1.3rem" }} />
        </div>
        <div className="profile-div">
          <BasicMenu/>
        </div>
      </div>
    </div>
  )
}

export default Header
