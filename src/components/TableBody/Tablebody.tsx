import React, { useState } from 'react'
import './Tablebody.scss'
import MoreAction from '../moreAction/MoreAction';

type Props = {
    createdAt: string,
    orgName: string,
    userName: string,
    email: string,
    phoneNumber: string,
    lastActiveDate: string
    id: any
}

const TableBody  = (props: Props) => {
    const [clikedId, setClickedId] = useState(0)
    const {orgName, userName, createdAt, email, phoneNumber, lastActiveDate, id} = props

    const handleClick = (clickedid: any) => {
        const userActionBoxs = Array.from(
            document.querySelectorAll('.user-action_box')
        );
        userActionBoxs.map((userActionBox) => {
            userActionBox.classList.remove('show-more-menu')
        })
        setClickedId((preClicked) => (clickedid == preClicked ? 0 : clickedid))
    }

  return (
        <>
            <tr className='users-table_body--row'>
                <td className='users-table_body'>
                    <p className="users-table-body_name">{orgName}</p>
                </td>
                <td className='users-table_body'>
                    <p className="users-table-body_name">{userName}</p>
                </td>
                <td className='users-table_body'>
                    <p className="users-table-body_name">{email}</p>
                </td>
                <td className='users-table_body'>
                    <p className="users-table-body_name">{phoneNumber}</p>
                </td>
                <td className='users-table_body'>
                    <p className="users-table-body_name">{createdAt}</p>
                </td>
                <td className='users-table_body'>
                    <p className="users-table-body_name active">{lastActiveDate}</p>
                </td>
                <td className='users-table_body' onClick={()=>handleClick(id)}>
                    <span className="table-body_action">
                        ...
                    </span>
               { clikedId === id && <MoreAction clikedId={clikedId} id={id} />}
                </td>
            </tr>
        </>
  )
}

export default TableBody