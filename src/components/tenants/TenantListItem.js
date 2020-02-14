import React from 'react'
import { Link } from 'react-router-dom';
import moment from 'moment'


const TenantListItem = ({ id, name, address, cell, email, startDate, endDate })=>{
  let statusClass = 'list-item'
  if(endDate!==0){
    statusClass = 'list-item-inactive'
  }
  return (

    <div>
      <Link className={statusClass} to={`/edit_tenant/${id}`}>
        <div>
          <h3 className='list-item__title'>{name}</h3>
          <h3 className='list-item__title'>{address}</h3>
          <span className='list-item__sub-title'>Start Date:{moment(startDate).format('MMMM Do, YYYY')}</span>
          { moment(endDate).format('MMMM Do, YYYY')!=='December 31st, 1969' ?
          <span className='list-item__sub-title'>Finish Date:{moment(endDate).format('MMMM Do, YYYY')}</span>
          : null }
        </div>
        <h3 className='list-item__data'>
          {cell}
        </h3>
        <h3 className='list-item__data'>
          {email}
        </h3>
      </Link>
    </div>



    // <div>
    //   <Link className={statusClass} to={`/edit/${id}`}>
    //     <div>
    //       <h3 className='list-item__title'>{ name } [{ cell } { email }]</h3>
    //       <h3 className='list-item__title'> { address } </h3>
    //       <h3 className='list-item__title'>
    //         Start Date:{moment(startDate).format('MMMM Do, YYYY')}
    //       </h3>
    //       <h3 className='list-item__data'>
    //         Status: {status}
    //       </h3>
    //
    //     </div>
    //   </Link>
    // </div>

  )
}

export default TenantListItem
