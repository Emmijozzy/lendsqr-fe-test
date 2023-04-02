import React from 'react';
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
        <LayoutMain />
    </section>
  )
}

export default Layout