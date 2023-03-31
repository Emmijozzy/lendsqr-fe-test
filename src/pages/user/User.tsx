import React, {useContext, useState, useEffect} from 'react';
import ReactPaginate from 'react-paginate';
import axios from 'axios';
import moment from 'moment';
import { AppContext } from '../../contexts/ContextProvider';
import { usersStats } from '../../data/cardData';
import Card from '../../components/card/Card';
import Filter from '../../components/filter/Filter'
import filterResultsIcon from '../../assets/images/filter-results-button.svg';
import TableBody from './../../components/TableBody/Tablebody';
import './user.scss';

type Props = {}

const value = {
  createdAt: " ",
  orgName: " ",
  userName: " ",
  email: " ",
  phoneNumber: " ",
  lastActiveDate: " "
}

const User = (props: Props) => {
  const [loading, setLoading] = useState<Boolean>(true);
  const [showing, setShowing] =useState(10)
	const [currentItems, setCurrentItems] = useState([value]);
	const [itemOffset, setItemOffset] = useState(0);
  const [showFilter, setShowFilter] = useState<number | null>(null)
	const itemsPerPage = showing;

  const usersData = useContext(AppContext).usersContext?.usersState
  const updateUsers = useContext(AppContext).usersContext?.updateUsers

  const tableHeaders = ['Organization', 'Username', 'Email', 'Phone number', 'Date joined', 'Status', '']

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      await axios
        .get(`https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users`)
        .then((response:any) => {
          if(updateUsers)
          updateUsers(response.data)
          setLoading(false);
        })
        .catch((error: any) => {
          const err = error.response.data;
          console.log(err)
          setLoading(false);
        });
    };

		fetchUsers();
	}, []);

  useEffect(() => {
		const endOffset = itemOffset + itemsPerPage;
    if (usersData ) {
      setCurrentItems(usersData?.slice(itemOffset, endOffset));
    }
	}, [itemOffset, itemsPerPage, usersData]);

  const handleChange = (e : any) => {
    setShowing(e.target.value);
  };
  

  const handlePageClick = (event: any) => {
    if(usersData){
      const newOffset = (event.selected * itemsPerPage) % usersData?.length;
      setItemOffset(newOffset);
    }
	};


  return (
    <div className="user user-container">
      <div className="user-header">
        <h2 className='user-header_name'>Users</h2>
      </div>
      <div className="user-content">
        <div className="user-cards-container">
        {usersStats.map((usersStat, i)=> {
          return(<Card key={i} title={usersStat.title} icon={usersStat.icon} count={usersStat.count} />)
        })}
        </div>
        <div className="user-content_users">
          <table className='users-table'>
            {loading ? 'Loading' : 
            <>
              <thead className='users-table_header'>
                <tr className='users-table_header--row'>
                  {tableHeaders.map((tableHeader, i) => (
                      <th key={i} className='users-table_head'>
                          <span className="users-table-head_name">{tableHeader}</span>
                          <span className="table-head_filter">
                          {i !== 6 ? <img src={filterResultsIcon} alt="Filter Results" onClick={() => (showFilter === i ? setShowFilter(null) : setShowFilter(i))} /> : ''}
                            {showFilter === i ? <Filter /> : ' '}
                          </span>
                      </th>
                  ))}
                </tr>
              </thead>
              <tbody className='users-table_body'>
                {currentItems?.map((userData, i) => (
                  <TableBody 
                    key={i}
                    orgName={userData.orgName} 
                    userName={userData.userName}
                    email={userData.email}
                    phoneNumber={userData.phoneNumber}
                    createdAt={moment(userData.createdAt).format('MMM D, YYYY h:mm a')}
                    lastActiveDate={'Active'}
                  />))}
              </tbody>
            </>
            }
          </table>
        </div>
          <div className="user-paging">
              <div className="user-paging_out">
                  showing
                  <select name="show" id="select-show" onChange={handleChange}>
                    <option value={10}>10</option>
                    <option value={50}>50</option>
                    <option value={100}>100</option>
                    <option value={200}>200</option>
                  </select>
                  out of { usersData?.length}
              </div>

              <ReactPaginate
                    nextLabel=">"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    marginPagesDisplayed={2}
                    pageCount={100}
                    containerClassName="user-pagination"
                    previousLabel="<"
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="arrow"
                    nextClassName="arrow"
                    breakLabel="..."
                    activeClassName="active"
              />
          </div>
      </div>
    </div>
  )
}

export default User