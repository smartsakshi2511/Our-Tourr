import React from 'react'
import Container from 'react-bootstrap/Container';
import RecentHolidaysItems from '../../Assets/RecentHolidaysItems';
import './BudgetFriendly.css'
import BudgetCards from './BudgetCards';

const BudgetFriendly = () => {
  return (
    <div className='budget-holidays my-4 my-sm-5'>
    <Container>
        <h2 className='text-uppercase fw-semibold mb-4 mb-sm-5'> Affordable Places to Travel</h2>
        <div className='row g-4'>
            {
                RecentHolidaysItems.map((item) => <BudgetCards key={item.id} itemImage={item.itemImage} itemTitle={item.itemTitle} itemDescription={item.itemDescription} itemNights={item.itemNights} itemPrice={item.itemPrice} />)
            }
        </div>
    </Container>
</div>
  )
}

export default BudgetFriendly ; 