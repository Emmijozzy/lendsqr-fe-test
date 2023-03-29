import React from 'react';
import LendLogo from '../logo/LendLogo';
import NavItem from '../navItem/NavItem';
import { NavContext } from '../../App';
import {customersNavDatas, businessNavDatas, settingsNavDatas} from '../../data/navItem';
import switcgArrowDown from '../../assets/images/sidebar-icons/switch-arrow-down.svg';
import navIcons from '../../assets/images/sidebar-icons/index';
import './LayoutSidebar.scss';

const {organisation, dashboard, logOut} = navIcons;

type Props = {}

const Sidebar = (props: Props) => {

  const navValue:any = React.useContext(NavContext); 


  const customersNavItems= <ul className='sidebar-menu_outlet'>
    {customersNavDatas.map((customersNavData, id) => {
      return(   <li className='sidebar-menu_item'><NavItem navIcon={customersNavData.navIcon} navName={customersNavData.navName} navLink={customersNavData.navLink} /></li>)
    })}
  </ul>

  const businessNavItems: any= <ul>
    {businessNavDatas.map((businessNavData, id) => {
      return(   <li><NavItem navIcon={businessNavData.navIcon} navName={businessNavData.navName} navLink={businessNavData.navLink} /></li>)
    })}
  </ul>

  const settingsNavItem: any= <ul>
    {settingsNavDatas.map((settingsNavData, id) => {
      return(   <li><NavItem navIcon={settingsNavData.navIcon} navName={settingsNavData.navName} navLink={settingsNavData.navLink} /></li>)
    })}
  </ul>

  const dasboard =  <ul><li><NavItem navIcon={dashboard} navName={'Dashboard'} navLink={'/'} /></li></ul>

  const logout = <div className='logout'>
     <ul><li><NavItem navIcon={logOut} navName={'Logout'} navLink={'/login'} /></li></ul>
     <p className='version'>v1.2.0</p>
  </div>


  return (
    <aside className={navValue.nav ? 'layout_sidebar-outlet sidebar-active' : 'layout_sidebar-outlet sidebar-inactive'}>
      <div className="layout_sidebar-inner">
        <header className='layout-sidebar_header'>
          <div className='sidebar-header_nav--outlet'>
            <nav className='sidebar-header_nav--inner'>
                <span className="nav_logo"><img src={organisation} alt="Switch" /></span>
                <p>Switch Organisation  <img 
                className="nav-dropdown_logo" src={switcgArrowDown} alt="down" /></p>
            </nav>
          </div>
        </header>

        <nav className="sidebar-menu">
            {dasboard}
          <span className="super-nav_item">Customer</span>
            {customersNavItems}
          <span className="super-nav_item">Business</span>
            {businessNavItems}
          <span className="super-nav_item">Settings</span>
            {settingsNavItem}
        </nav>
        {logout}
      </div>
    </aside>
  )
}

export default Sidebar