import React from 'react';
import './User.scss';

type Props = {}

const User = (props: Props) => {
  return (
    <div className="user user-container">
        <div className="user-header">
            <h2 className='user-header_name'>Users</h2>
        </div>
        <div className="user-content">
            user head content
        </div>
    </div>
  )
}

export default User