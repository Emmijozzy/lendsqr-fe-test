import React from 'react'
import filterResultsIcon from '../../../assets/images/filter-results-button.svg';

type Props = {
    createdAt: string,
    orgName: string,
    userName: string,
    email: string,
    phoneNumber: string,
    lastActiveDate: string
}

const TableBody  = (props: Props) => {
    const {orgName, userName, createdAt, email, phoneNumber, lastActiveDate} = props

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
                <td className='users-table_body'>
                    <p className="table-body_action">
                        <span>.</span>
                        <span>.</span>
                        <span>.</span>
                    </p>
                </td>
            </tr>
        </>
  )
}

export default TableBody