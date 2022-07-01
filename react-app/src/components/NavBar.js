import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import DropdownMenu from './DropdownMenu';
import './NavBar.css'
import Search from './Search';
import { useHistory } from 'react-router-dom';
import slickicon from "../images/slickicon.png"


const NavBar = ({ loaded }) => {
  const user = useSelector((state) => state.session.user)
  const history = useHistory()
  let sessionNav;
  const homePage = () => {
    history.push(`/users/${user.id}`)
  }

  if (user) {
    const { id, first_name, last_name } = user;
    sessionNav = (
      <>
        <img
          className='slick-logo'
          style={{ cursor: "pointer" }}
          alt=''
          src={slickicon}
          onClick={homePage} />
        <Search />
        <DropdownMenu />
      </>
    )
  } else {
    sessionNav = (
      <h2>Logo Here</h2>
    )
  }
  return (
    <nav className='navbar'>
      {loaded && sessionNav}
    </nav>
  )
}

export default NavBar;
