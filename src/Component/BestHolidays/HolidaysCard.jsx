import React from "react";
import Card from "react-bootstrap/Card";

const HolidaysCard = (props) => {
  return (
    <div className="col-lg-4">
      <Card className="shadow h-100 overflow-hidden">
        <Card.Img className="img-hover" variant="top" src={props.itemsImage}/>
        <Card.Body className='p-4'>
                <Card.Title className='text-start text-uppercase fw-bold'>{props.itemTitle}</Card.Title>
                <Card.Text className='text-start'>{props.itemDescription}</Card.Text>
                <a href="/" className='text-green text-capitalize fw-semibold'>Book now</a>
            </Card.Body>
       
      </Card>
    </div>
  );
};

export default HolidaysCard;
