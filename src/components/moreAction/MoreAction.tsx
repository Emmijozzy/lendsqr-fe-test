import React from 'react'
import { Link } from 'react-router-dom'
import { userActions } from '../../data/userActions';
import './MoreAction.scss'

type Props = {
    id: string
    clikedId: number
}

const MoreAction = (props: Props) => {
    const {id, clikedId} = props

  return (
    <>
        <ul className={clikedId === (+id)?'user-action_box show-more-menu': 'user-action_box'}>
        {
            userActions.map((userAction, i) => {
                return(<li>
                    <Link key={i} to={'/user-details'} state={id}>
                        <img src={userAction.icon} alt={userAction.action}/><span>{userAction.action}</span>
                    </Link>
                </li>)
            })
        }
        </ul>
    </>
  )
}

export default MoreAction