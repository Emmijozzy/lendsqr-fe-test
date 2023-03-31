import React from 'react';
import cardIcon from '../../assets/images/user.svg';
import './Card.scss';

type Props = {
  title: string
  icon: string
  count: string
}

const Card = (props: Props) => {
const {title, icon, count} = props;

  return (
    <div className='card'>
      <span className="card-items">
        <img src={icon} alt="" />
      </span>
      <span className="card-items ">
        <p className='card-items_name'>{title}</p>
      </span>
      <span className="card-items">
        <p className='card-items_number'>{count}</p>
      </span>
    </div>
  )
}

export default Card