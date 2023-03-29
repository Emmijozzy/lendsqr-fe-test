import React from 'react';
import Card from '../../../components/card/Card';
import './User.scss';

type Props = {}

const User = (props: Props) => {
  return (
    <div className="user user-container">
      <div className="user-header">
        <h2 className='user-header_name'>Users</h2>
      </div>
      <div className="user-content">
        <div className="user-cards-container">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="user-content_main">
          dsjjycgvhjbsdnkaLSa jhgd
        </div>
      </div>
    </div>
  )
}

export default User