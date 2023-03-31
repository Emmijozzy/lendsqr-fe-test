import React from 'react';
import './LayoutMain.scss';
import User from '../../pages/user/User';

type Props = {}

const LayoutMain = (props: Props) => {
  return (
    <main className='layout-main layout-main_outlet' >
      <section className='layout-main_inner'>
        <User/>
      </section>
    </main>
  )
}

export default LayoutMain