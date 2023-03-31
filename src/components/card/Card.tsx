import React from 'react';
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
        <img src={icon} alt={title} />
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