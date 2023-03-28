import React from 'react';
import LendLogo from '../logo/LendLogo';
import './LayoutSidebar.scss'


type Props = {}

const Sidebar = (props: Props) => {
  return (
    <aside className='layout_sidebar'>
      <div className='sidebar_logo'>
          <LendLogo />
      </div>
      <div className="sidebar_menu">

      </div>

    </aside>
  )
}

export default Sidebar