import React from 'react'
import {NavLink } from 'react-router-dom'
import './NavItem.scss'

type Props = {
  navIcon: string;
  navLink: string;
  navName: string;
}

const NavItem = (props: Props) => {
  const {navLink, navIcon, navName} = props

  return (
    <NavLink to={navLink} className='nav-item'>
      <img className='nav-Item_Image' src={navIcon} alt="navName" />
      <p className='nav-item_name'>{navName}</p>
    </NavLink>
  )
}

export default NavItem