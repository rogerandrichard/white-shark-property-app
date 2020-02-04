import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const TransactionListItem = ({ id, location, typeIncome, description, amount, createdAt, note }) => (
  <div>
    <Link className='list-item' to={`/edit/${id}`}>
      <div>
        <h3 className='list-item__title'>{ location } [{ typeIncome }]</h3>
        <h3 className='list-item__title'>{ description } - { note }</h3>
        <span className='list-item__sub-title'>{moment(createdAt).format('MMMM Do, YYYY')}</span>
      </div>
      <h3 className='list-item__data'>
        {numeral(amount / 100).format('$0,0.00')}
      </h3>
    </Link>
  </div>
);

export default TransactionListItem;
