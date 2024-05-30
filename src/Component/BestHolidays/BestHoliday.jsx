import React from 'react'
import './BestHolidays.css';
import Container from 'react-bootstrap/Container';
import LastHolidaysItems from '../../Assets/LastHolidaysItems';
 import HolidaysCard from './HolidaysCard';

const BestHoliday = () => {
  return (
    <div className='best-holidays my-4 my-sm-5'>
    <Container>
        <h2 className='text-uppercase fw-semibold my-4 my-sm-5 pt-lg-4'>Best holidays</h2>
        <div className="row g-4">
            {
                LastHolidaysItems.map((item) => <HolidaysCard key={item.id} itemImage={item.itemImage} itemTitle={item.itemTitle} itemDescription={item.itemDescription} />)
            }
        </div>
    </Container>
</div>
  )
}

export default BestHoliday