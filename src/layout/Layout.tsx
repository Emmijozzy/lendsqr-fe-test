import React from 'react';
import { Outlet } from 'react-router-dom';
import LayoutTopNav from '../components/layoutTopNav/LayouTopNav';
import LayoutSidebar from '../components/LayoutSidebar/LayoutSidebar';
import LayoutMain from '../components/layoutMain/LayoutMain';
import './layout.scss'

type Props = {}

const Layout = (props: Props) => {
  return (
    <section className='layout'>
        <LayoutTopNav />
        <LayoutSidebar />
        <Outlet />
    </section>
  )
}

export default Layout