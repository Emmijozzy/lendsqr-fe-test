import React from 'react'
import { NavLink } from 'react-router-dom'
import LendLogo from '../logo/LendLogo'
import searchIcon from '../../assets/images/search.svg'
import notifyIcon from '../../assets/images/notification.svg'
import avater from '../../assets/images/avatar.png'
import dropdownIcon from '../../assets/images/dropdown.svg'
import openNav from '../../assets/images/mobile-nav-open.svg'
import closeNav from '../../assets/images/mobile-nav-close.svg'
import './LayoutTopNav.scss'
import { AppContext } from '../../contexts/ContextProvider'

type Props = {}

const LayoutTopNav = (props: Props) => {

    const navValue = React.useContext(AppContext).navContext;
    const {nav, toggleNav} = navValue;

    return (
        <header className='layout-top_nav'>
            <div className='layout_logo'>
                <LendLogo />
            </div>
            <div className="top-nav_search">
                <input type="text" placeholder='Search for anything' />
                <div className='search_icon'>
                    <img src={searchIcon} alt="Search Icon" />
                </div>
            </div>
            <ul className="top_nav_action">
                <li className="notify-item"><NavLink to={'/doc'}>Doc</NavLink></li>
                <li className="notify-item"><img src={notifyIcon} alt="Notification Icon" /></li>
                <li className="notify-item avater"><img src={avater} alt="" /></li>
                <li className="notify-item notify-item-username">
                    <div className="username_dropdown">
                        <p className="username">Adedeji</p>
                        <img src={dropdownIcon} alt="Dropdown Icon" />
                    </div>
                </li>
                <li className="mobile-nav" onClick={toggleNav}>
                    <img src={nav ? closeNav : openNav} alt="" />
                </li>
            </ul>
        </header>
    )
}

export default LayoutTopNav