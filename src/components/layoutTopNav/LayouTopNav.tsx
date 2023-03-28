import React from 'react'
import LendLogo from '../logo/LendLogo'
import searchIcon from '../../assets/images/search.svg'
import notifyIcon from '../../assets/images/notification.svg'
import avater from '../../assets/images/avater.svg'
import dropdownIcon from '../../assets/images/dropdown.svg'
import './LayoutTopNav.scss'

type Props = {}

const LayoutTopNav = (props: Props) => {
  return (
    <header className='layout-top_nav'>
            <div className='layout_logo'>
                <LendLogo />
            </div>
            <div className="top-nav_search">
                <input type="text" placeholder='Search for anything'/>
                <div className='search_icon'>
                    <img src={searchIcon} alt="Search Icon" />
                </div>
            </div>
            <div className="top_nav_action">
                <span className="notify-item"><a rel="stylesheet" href="">Doc</a></span>
                <span className="notify-item"><img src={notifyIcon} alt="Notification Icon" /></span>
                <span className="notify-item avater"><img src={avater} alt="" /></span>               
                <span className="notify-item">
                    <div className="username_dropdown">
                        <p className="username">Adedeji</p>
                        <img src={dropdownIcon} alt="Dropdown Icon" />
                    </div>
                </span>
            </div>
        </header>
  )
}

export default LayoutTopNav