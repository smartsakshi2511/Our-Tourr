import React from 'react'
import { Container } from 'react-bootstrap' 
 import './PlanHolidays.css'
import BlueBtn from '../BlueBtn/BlueBtn'

const PlanHolidays = (props) => {
  return (
    <div className='holiday-plan-section py-5'>
    <Container className='h-100 d-flex flex-column align-items-start justify-content-end'>
        <h3 className='text-start text-light text-capitalize fw-semibold'>{props.itemHolidayPlanTitle}</h3>
        <p className='text-start text-light'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore ab quis omnis. Excepturi, corrupti tenetur.</p>
        <BlueBtn btnTitle='Check Summer Deals' />
    </ Container>
</div>
  )
}

export default PlanHolidays