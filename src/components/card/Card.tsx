import React from 'react';
import cardIcon from '../../assets/images/user.svg';
import './Card.scss';

type Props = {}

const Card = (props: Props) => {
  return (
    <div className='card'>
      <span className="card-items">
        <img src={cardIcon} alt="" />
      </span>
      <span className="card-items ">
        <p className='card-items_name'>User</p>
      </span>
      <span className="card-items">
        <p className='card-items_number'>68746</p>
      </span>
    </div>
  )
}

export default Card