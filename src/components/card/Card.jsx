import React from "react";
import "./card.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import API_URL from "../../../config/global";

function CustomCard({ file, name, price }) {
  return (
    <div className="card">
      <Card style={{ width: "18rem", height: "350px", border:'none' }}>
        <Card.Img variant="top" src={API_URL + file} width={100} height={200} />
        <Card.Body style={{ backgroundColor: "#999" }}>
          <Card.Title>{name}</Card.Title>
          <Card.Text>price {price}</Card.Text>
          <Button variant="primary">Add to cart</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CustomCard;
