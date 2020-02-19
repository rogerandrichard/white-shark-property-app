import React from 'react'
import { Link } from 'react-router-dom';
import moment from 'moment'
import numeral from 'numeral'


const TenantListItem = ({ id, name, address, cell, email, startDate, endDate, rent })=>{
  let statusClass = 'tenant-item'
  if(endDate!==0){
    statusClass = 'tenant-item-inactive'
  }
  return (
    <div>
      <Link className={statusClass} to={`/edit_tenant/${id}`}>
          <div className='tenant-left-items'>
            <span className='tenant-line-items'>{name}</span>
            <span>{address}</span>

            <h3 className='list-item__sub-title'>Start Date:{moment(startDate).format('MMMM Do, YYYY')}</h3>
                  { moment(endDate).format('MMMM Do, YYYY')!=='December 31st, 1969' ?
            <h3 className='list-item__sub-title'>Finish Date:{moment(endDate).format('MMMM Do, YYYY')}</h3>
                  : null }
          </div>
          <div className='tenant-right-items'>
            <span className='tenant-line-items'>{cell}</span>
            <span>{email}</span>
            <h3 className='list-item__sub-title'>Rent {numeral(rent / 100).format('$0,0.00')}</h3>
          </div>
      </Link>
    </div>

    // <div>
    //   <Link className={statusClass} to={`/edit_tenant/${id}`}>
    //     <div>
    //       <h3 className='list-item__title'>{name}</h3>
    //       <h3 className='list-item__title'>{address}</h3>
    //       <span className='list-item__sub-title'>Start Date:{moment(startDate).format('MMMM Do, YYYY')}</span>
    //       { moment(endDate).format('MMMM Do, YYYY')!=='December 31st, 1969' ?
    //       <span className='list-item__sub-title'>Finish Date:{moment(endDate).format('MMMM Do, YYYY')}</span>
    //       : null }
    //     </div>
    //     <h3 className='list-item__data'>
    //       {cell}
    //     </h3>
    //     <h3 className='list-item__data'>
    //       {email}
    //     </h3>
    //   </Link>
    // </div>



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
